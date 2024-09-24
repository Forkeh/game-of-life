import Grid from "./grid.js";

export function init() {
    console.log("Model kører");
}

export let grid;

export function createModel(rows, cols) {
    grid = new Grid(rows, cols);
    grid.set(0,1, 0);
    console.table(grid);
    
}
