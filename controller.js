import * as view from "./view.js";
import * as model from "./model.js";

export const GRID_ROWS = 5;
export const GRID_COLS = 5;

init();

function init() {
    console.log("Controller kører");
    model.init();
    view.init();
    view.createBoardView();
    model.createModel(GRID_ROWS, GRID_COLS);
    updateBoardView();
}

export function updateBoardView() {
    view.updateBoardView(model.grid);
}
