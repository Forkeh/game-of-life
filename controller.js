import * as view from "./view.js";
import * as model from "./model.js";

export const GRID_ROWS = 20;
export const GRID_COLS = 20;
export const SPAWN_CHANCE = 0.5

init();

function init() {
    console.log("Controller kører");
    model.init();
    view.init();
    view.createBoardView();
    model.createModel(GRID_ROWS, GRID_COLS, SPAWN_CHANCE);
    updateBoardView();

    setInterval(() => {
        model.getNextGeneration(GRID_ROWS, GRID_COLS);
        updateBoardView();
    }, 500);
}

export function updateBoardView() {
    view.updateBoardView(model.grid);
}
