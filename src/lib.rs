use wasm_bindgen::prelude::*;

#[wasm_bindgen]
extern {
    pub fn alert(s: &str);
}

#[wasm_bindgen]
pub fn greet(name: &str) {
    alert(&format!("Hello, {}!", name));
}

#[wasm_bindgen]
pub fn funny_button() {
    greet("funny man")
}

#[wasm_bindgen]
pub fn quadratic_formula(a: f32, b: f32, c: f32) -> Vec<f32> {
    let root1: f32 = ((-b) - ((b.powf(2.0)) - ((4.0*a)*c)).sqrt())/ (2.0*a);
    let root2: f32 = ((-b) + ((b.powf(2.0)) - ((4.0*a)*c)).sqrt())/ (2.0*a);


    return [root1, root2].to_vec();
}


