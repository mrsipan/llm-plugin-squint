import os
import queue
import re
import subprocess
import tempfile
import threading
from typing import Optional

import llm
from quickjs import Context

# --- THE GC BLACK HOLE ---
_leak_queue = queue.Queue()


def _black_hole_worker():
    immortal_contexts = []
    while True:
        immortal_contexts.append(_leak_queue.get())


threading.Thread(target=_black_hole_worker, daemon=True).start()


class SquintJS(llm.Toolbox):
    _context: Optional[Context] = None

    def _get_context(self) -> Context:
        if not self._context:
            self._context = Context()
            self._context.set_time_limit(1.0)
            self._context.set_memory_limit(16 * 1024 * 1024)

            # Instantly load the pre-bundled standard library
            bundle_path = os.environ.get(
                "SQUINT_BUNDLE_PATH", "squint_bundle.js"
                )
            try:
                with open(bundle_path, "r") as f:
                    self._context.eval(f.read())
            except FileNotFoundError:
                raise RuntimeError(
                    f"Standard library bundle not found at {bundle_path}. Please build it first."
                    )

            _leak_queue.put(self._context)

        return self._context

    def _compile_with_host(self, clojure_script: str) -> str:
        """Compile CLJS to JS using the standalone QuickJS binary (qjs)."""
        squint_path = os.environ.get("SQUINT_JS_PATH", "compiler.js")
        squint_abs_path = os.path.abspath(squint_path)

        with tempfile.NamedTemporaryFile(
            suffix=".cljs", mode="w", delete=False
            ) as cljs_file:
            cljs_file.write(clojure_script)
            cljs_path = cljs_file.name

        bridge_js = f"""
        import * as std from 'std';
        import * as squint from '{squint_abs_path}';

        const cljsCode = std.loadFile(scriptArgs[1]);

        if (!cljsCode) {{
            console.error("Failed to read CLJS file.");
            std.exit(1);
        }}

        try {{
            const compileFn = squint.compileString || squint.default?.compileString || squint.squint_core?.compileString;
            const jsCode = compileFn(cljsCode);
            std.printf("%s", jsCode);
        }} catch (e) {{
            console.error(e.toString());
            std.exit(1);
        }}
        """

        with tempfile.NamedTemporaryFile(
            suffix=".js", mode="w", delete=False
            ) as bridge_file:
            bridge_file.write(bridge_js)
            bridge_path = bridge_file.name

        try:
            result = subprocess.run(
                ["qjs", "-m", bridge_path, cljs_path],
                capture_output=True,
                text=True,
                check=True
                )

            compiled_js = result.stdout

            # --- INTERCEPT IMPORTS & MAP TO THE PRE-BUNDLED GLOBALS ---

            # 1. Map namespace imports (e.g., import * as html from 'squint-cljs/html.js')
            compiled_js = re.sub(
                r"import\s+\*\s+as\s+([\w_]+)\s+from\s+['\"]squint-cljs/([\w_-]+)(?:\.js|\.mjs)?['\"];?",
                r"const \1 = globalThis.squint_lib.\2;", compiled_js
                )

            # 2. Map named imports (e.g., import { join } from 'squint-cljs/string.js')
            compiled_js = re.sub(
                r"import\s+\{([^}]+)\}\s+from\s+['\"]squint-cljs/([\w_-]+)(?:\.js|\.mjs)?['\"];?",
                r"const {\1} = globalThis.squint_lib.\2;", compiled_js
                )

            # 3. Strip remaining ES module syntax to prevent QuickJS SyntaxErrors
            compiled_js = re.sub(
                r'import\s+.*?;', '', compiled_js, flags=re.DOTALL
                )
            compiled_js = re.sub(
                r'export\s+.*?;', '', compiled_js, flags=re.DOTALL
                )

            return compiled_js

        except subprocess.CalledProcessError as e:
            raise RuntimeError(
                f"QuickJS Compilation failed:\n{e.stderr}"
                )
        finally:
            if os.path.exists(cljs_path):
                os.remove(cljs_path)
            if os.path.exists(bridge_path):
                os.remove(bridge_path)

    def execute_squint(self, clojure_script: str) -> str:
        """
        Compile and execute Squint code.
        The full standard library is available (clojure.string, clojure.set, math, etc.).
        """
        context = self._get_context()
        try:
            compiled_js = self._compile_with_host(clojure_script)
            result = context.eval(compiled_js)

            if hasattr(result, "json"):
                return result.json()
            return str(result) if result is not None else ""

        except RuntimeError as e:
            return f"Compilation Error: {str(e)}"
        except Exception as e:
            return f"Execution Error: {str(e)}"

    def reset_context(self):
        self._context = None


def squint_eval(clojure_script: str) -> str:
    toolbox = SquintJS()
    return toolbox.execute_squint(clojure_script)


@llm.hookimpl
def register_tools(register):
    register(SquintJS)
    register(squint_eval)
