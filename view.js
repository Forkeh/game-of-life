import * as controller from "./controller.js";

export function init() {
    console.log("View kører");
}

export function createBoardView() {
    const board = document.querySelector("#board");

    board.style.setProperty("--GRID_WIDTH", controller.GRID_COLS);

    for (let row = 0; row < controller.GRID_ROWS; row++) {
        for (let col = 0; col < controller.GRID_COLS; col++) {
            const cell = document.createElement("div");
            cell.dataset.row = row;
            cell.dataset.col = col;
            cell.classList.add("cell");
            board.appendChild(cell);
        }
    }
}

export function updateBoardView(grid) {
    console.log("UPDATING VIEW", grid);

    document.querySelector("#generation-counter").textContent = controller.GENERATIONS;

    for (let row = 0; row < controller.GRID_ROWS; row++) {
        for (let col = 0; col < controller.GRID_COLS; col++) {
            const value = grid.get(row, col);

            const visualCell = document.querySelector(`[data-row="${row}"][data-col="${col}"]`);

            if (value === 1) {
                visualCell.style.setProperty("background-color", "black");
            } else if (value === 0) {
                visualCell.style.setProperty("background-color", "white");
            }
        }
    }
}
