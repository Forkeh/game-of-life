import * as view from "./view.js";
import * as model from "./model.js";

export const GRID_ROWS = 40;
export const GRID_COLS = 40;
export const SPAWN_CHANCE = 0.5
export let GENERATIONS = 0;

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
        GENERATIONS++;
    }, 500);
}

export function updateBoardView() {
    view.updateBoardView(model.grid);
}
