import os
import queue
import re
import threading
from typing import Optional

import llm
from quickjs import Context

# ── GC WORKAROUND ────────────────────────────────────────────────────────────
# The quickjs Python binding can segfault if a Context is garbage-collected
# while the interpreter is still alive. We keep all Contexts alive for the
# process lifetime by draining them into this immortal list on a daemon thread.
_immortal_refs: list = []
_pin_queue: queue.Queue = queue.Queue()


def _pin_worker():
    while True:
        _immortal_refs.append(_pin_queue.get())


threading.Thread(
    target=_pin_worker, daemon=True, name="quickjs-gc-pin"
    ).start()


def _pin(ctx: Context) -> Context:
    """Register a Context so it is never garbage-collected."""
    _pin_queue.put(ctx)
    return ctx


# ── MODULE-LEVEL SINGLETONS ───────────────────────────────────────────────────
# One context for compilation, one for execution. Both survive across all calls.

_compiler_ctx: Optional[Context] = None  # runs compiler.js → emits JS
_runtime_ctx: Optional[Context] = None  # runs the compiled JS


def _get_compiler_ctx() -> Context:
    """
    Load compiler.js into a dedicated Context and expose a Python-callable
    compile function.  compiler.js must be a plain-script / IIFE / UMD build —
    the Python quickjs bindings do not support ES-module syntax.
    If your build is ESM-only, bundle it with esbuild --format=iife first:
        esbuild compiler.js --bundle --format=iife \
            --global-name=SquintCompiler --outfile=compiler_iife.js
    """
    global _compiler_ctx
    if _compiler_ctx is not None:
        return _compiler_ctx

    ctx = Context()
    ctx.set_time_limit(10.0)
    ctx.set_memory_limit(64 * 1024 * 1024)

    js_path = os.environ.get("SQUINT_JS_PATH")
    if js_path is not None:
        with open(js_path, 'r', encoding='utf-8') as fp:
            js_code = fp.read()

    else:
        with importlib.resources.files("llm_tools_squint.js").joinpath(
            "compiler_iife.js"
            ).open("r", encoding="utf-8") as fp:
            js_code = fp.read()

    try:
        with open(js_code) as fp:
            src = fp.read()
    except FileNotFoundError:
        raise RuntimeError(
            f"Squint compiler not found at '{compiler_path}'. "
            "Set SQUINT_JS_PATH or build compiler.js first."
            )

    ctx.eval(src)

    # Probe for the compile function under the names squint typically exports
    ctx.eval(
        """
        var __compileString = (
            (typeof SquintCompiler !== 'undefined' && SquintCompiler.compileString)
            || (typeof compileString !== 'undefined' && compileString)
            || (typeof squint_core !== 'undefined' && squint_core.compileString)
        );
        if (!__compileString) throw new Error(
            "compileString not found — is compiler.js an IIFE/UMD build?"
        );
    """
        )

    _compiler_ctx = _pin(ctx)
    return _compiler_ctx


def _get_runtime_ctx() -> Context:
    global _runtime_ctx
    if _runtime_ctx is not None:
        return _runtime_ctx

    ctx = Context()
    ctx.set_time_limit(5.0)
    ctx.set_memory_limit(32 * 1024 * 1024)

    bundle_path = os.environ.get("SQUINT_BUNDLE_PATH")
    if bundle_path is not None:
        with open(bundle_path, 'r', encoding='utf-8') as fp:
            bundle_path = fp.read()
    else:
        with importlib.resources.files("llm_tools_squint.js").joinpath(
            "squint_bundle.js"
            ).open("r", encoding="utf-8") as fp:
            bundle_path = fp.read()

    try:
        with open(bundle_path) as fp:
            ctx.eval(fp.read())
    except FileNotFoundError:
        raise RuntimeError(
            f"Standard library bundle not found at '{bundle_path}'. "
            "Build it first."
            )

    _runtime_ctx = _pin(ctx)
    return _runtime_ctx


# ── IMPORT REWRITING ─────────────────────────────────────────────────────────

# Each pattern is explicit — no DOTALL, so we never silently eat too much.
_IMPORT_PATTERNS = [
    # import * as foo from 'squint-cljs/bar.js'  →  var foo = globalThis.squint_lib.bar;
    (
        re.compile(
            r"^import\s+\*\s+as\s+([\w$]+)\s+from\s+['\"]squint-cljs/([\w$-]+?)(?:\.m?js)?['\"];?\s*$",
            re.MULTILINE,
            ),
        r"var \1 = globalThis.squint_lib.\2;",
        ),
    # import { a, b } from 'squint-cljs/bar.js'  →  var { a, b } = globalThis.squint_lib.bar;
    (
        re.compile(
            r"^import\s+\{([^}]+)\}\s+from\s+['\"]squint-cljs/([\w$-]+?)(?:\.m?js)?['\"];?\s*$",
            re.MULTILINE,
            ),
        r"var {\1} = globalThis.squint_lib.\2;",
        ),
    # strip remaining imports/exports
    (re.compile(r"^import\b[^\n]*;?\s*$", re.MULTILINE), ""),
    (re.compile(r"^export\b[^\n]*;?\s*$", re.MULTILINE), ""),
    ]


def _rewrite_imports(js: str) -> str:
    for pattern, replacement in _IMPORT_PATTERNS:
        js = pattern.sub(replacement, js)
    return js


# ── CORE LOGIC ───────────────────────────────────────────────────────────────


def _compile(clojure_script: str) -> str:
    ctx = _get_compiler_ctx()
    # Pass source via a JS variable to avoid any template-literal escaping issues
    ctx.eval(f"var __src = {repr(clojure_script)};")
    compiled_js = ctx.eval("__compileString(__src)")
    return _rewrite_imports(str(compiled_js))


def _execute(compiled_js: str) -> str:
    ctx = _get_runtime_ctx()
    result = ctx.eval(compiled_js)
    if hasattr(result, "json"):
        return result.json()
    # Add whitespace after stdout/stderr and 'nil' on None
    return '\n' + str(result) if result is not None else "\nnil"


# ── LLM TOOLBOX ──────────────────────────────────────────────────────────────


class SquintJS(llm.Toolbox):
    def execute_squint(self, clojure_script: str) -> str:
        """
        Compile and execute Squint ClojureScript.
        The full standard library is available (clojure.string, clojure.set, math, …).
        """
        try:
            compiled_js = _compile(clojure_script)
            return _execute(compiled_js)
        except RuntimeError as e:
            return f"Compilation Error: {e}"
        except Exception as e:
            return f"Execution Error: {e}"

    def reset_context(self) -> str:
        """Drop both contexts so they are recreated fresh on the next call."""
        global _compiler_ctx, _runtime_ctx
        _compiler_ctx = None
        _runtime_ctx = None
        return "Contexts reset."


def squint_eval(clojure_script: str) -> str:
    """Compile and run a Squint ClojureScript expression."""
    return SquintJS().execute_squint(clojure_script)


@llm.hookimpl
def register_tools(register):
    register(SquintJS)
    register(squint_eval)
