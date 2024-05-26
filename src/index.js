import init, { greet, funny_button } from "../pkg/hello_wasm.js";

init().then(() => {
    greet("WebAssembly");
    window.funny_button = funny_button;
});
