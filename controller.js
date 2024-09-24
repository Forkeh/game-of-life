import * as view from "./view.js";
import * as model from "./model.js";

init();

function init() {
    console.log("Controller kører");
    model.init();
    view.init();
}
