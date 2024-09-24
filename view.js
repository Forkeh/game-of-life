import * as controller from "./controller.js";

export function init() {
    console.log("View kører");
}

export function createView() {
    const board = document.querySelector("#board");

    board.style.setProperty("--GRID_WIDTH", controller.GRID_WIDTH);

    for (let row = 0; row < controller.GRID_HEIGHT; row++) {
        for (let col = 0; col < controller.GRID_WIDTH; col++) {
            const cell = document.createElement("div");
            cell.classList.add("cell");
            board.appendChild(cell);
        }
    }
}
