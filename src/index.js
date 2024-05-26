import init, { greet, funny_button, quadratic_formula } from "../pkg/hello_wasm.js";

function call_quad_formula() {
    const a = document.getElementById("quad_a");
    const b = document.getElementById("quad_b");
    const c = document.getElementById("quad_c");
    const quadResult2Id = document.getElementById("quadratic_total_result1");
    const quadResult1Id = document.getElementById("quadratic_total_result2");

    let quad_result = quadratic_formula(a.value, b.value, c.value);

    quadResult1Id.textContent = quad_result[0];
    quadResult2Id.textContent = quad_result[1];
}


init().then(() => {
    
    call_quad_formula();

    window.funny_button = funny_button;
    window.call_quad_formula = call_quad_formula;
});

