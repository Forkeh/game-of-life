import Grid from "./grid.js";

export function init() {
    console.log("Model kører");
}

export let grid;

export function createModel(rows, cols) {
    grid = new Grid(rows, cols);

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            if (Math.random() < 0.15) {
                grid.set(row, 1, col);
            }
        }
    }

    console.table(grid);
}
