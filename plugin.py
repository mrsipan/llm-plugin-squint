import json
import pathlib
import urllib.error
import urllib.request
from typing import Optional

import llm
from quickjs import Context

PLUGIN_DIR = pathlib.Path(__file__).parent
SQUINT_LIB_PATH = PLUGIN_DIR / "vendor" / "squint.compiler.js"


class SquintTool(llm.Toolbox):
    _context: Optional[Context] = None

    def _get_context(self) -> Context:
        if not self._context:
            self._context = Context()
            self._context.set_memory_limit(32 * 1024 * 1024)
            self._context.set_time_limit(2.0)  # Network needs more time

            # --- Python Side: Network Handlers ---
            def safe_http_get(url):
                # Basic safety: block local/private IPs if desired
                blacklist = ["127.0.0.1", "localhost", "192.168"]
                if any(item in url for item in blacklist):
                    return "Error: Access to local network is restricted."

                try:
                    with urllib.request.urlopen(
                        url, timeout=5
                        ) as response:
                        return response.read().decode('utf-8')
                except Exception as e:
                    return f"Network Error: {str(e)}"

            # --- Injecting the Bridge ---
            self._context.add_callable("_py_fetch", safe_http_get)
            self._context.add_callable("console_log", print)

            self._context.eval(
                """
                var console = { log: console_log };
                var network = {
                    fetch: _py_fetch
                };
            """
                )

            if SQUINT_LIB_PATH.exists():
                self._context.eval(SQUINT_LIB_PATH.read_text())
            else:
                raise FileNotFoundError("Missing squint.compiler.js")

        return self._context

    def execute_clojure(self, code: str) -> str:
        """
        Execute Squint-CLJS with Network access.
        Example: (js/network.fetch "https://api.github.com/zen")
        """
        ctx = self._get_context()
        try:
            escaped_code = code.replace("\\", "\\\\").replace(
                "`", "\\`"
                ).replace("${", "\\${")
            compiled_js = ctx.eval(
                f"squint.compiler.compileString(`{escaped_code}`)"
                )
            result = ctx.eval(compiled_js)

            if hasattr(result, "json"):
                return result.json()
            return str(result) if result is not None else ""
        except Exception as e:
            return f"Error: {str(e)}"


@llm.hookimpl
def register_tools(register):
    register(SquintTool)
