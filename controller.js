import * as view from "./view.js";
import * as model from "./model.js";

export const GRID_WIDTH = 50;
export const GRID_HEIGHT = 50;

init();

function init() {
    console.log("Controller kører");
    model.init();
    view.init();
    view.createView();
}


export function createModel() {
    // TODO
}


