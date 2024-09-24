import * as view from "./view.js";
import * as model from "./model.js";

export const GRID_ROWS = 40;
export const GRID_COLS = 40;
export const SPAWN_CHANCE = 0.5;
export let generationCounter = 0;
export let isGameRunning = true;
let gameInterval;

init();

function init() {
    console.log("Controller kører");
    model.init();
    view.init();
    model.createModel(GRID_ROWS, GRID_COLS, SPAWN_CHANCE);
    updateBoardView();
    startGame();
}

export function startPauseGame() {
    if (isGameRunning) {
        pauseGame();
    } else {
        startGame();
    }
}

export function startGame() {
    isGameRunning = true;
    updateBoardView();

    gameInterval = setInterval(() => {
        model.getNextGeneration(GRID_ROWS, GRID_COLS);
        updateBoardView();
        generationCounter++;
    }, 1000);
}

export function pauseGame() {
    isGameRunning = false;

    clearInterval(gameInterval);
    updateBoardView();
}

export function updateBoardView() {
    view.updateBoardView(model.grid);
}

export function destroyThemAll() {
    model.grid.fill(0);
    generationCounter = 0;
    pauseGame();
}

export function createNewCell(row, col) {
    console.log("CREATE NEW CELL - row:", row, "col", col);
    model.grid.set(row, 1, col);
    updateBoardView();
}
