import * as view from "./view.js";
import * as model from "./model.js";

export const GRID_ROWS = 40;
export const GRID_COLS = 40;
export const SPAWN_CHANCE = 0.5;
export let generationCounter = 0;
let gameInterval;

init();

function init() {
    console.log("Controller kører");
    model.init();
    view.init();
    model.createModel(GRID_ROWS, GRID_COLS, SPAWN_CHANCE);
    updateBoardView();

    gameInterval = setInterval(() => {
        model.getNextGeneration(GRID_ROWS, GRID_COLS);
        updateBoardView();
        generationCounter++;
    }, 500);
}

export function updateBoardView() {
    view.updateBoardView(model.grid);
}

export function destroyThemAllEvent() {
    model.grid.fill(0);
    clearInterval(gameInterval);
    updateBoardView();
}
