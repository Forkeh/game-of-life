import * as controller from "./controller.js";

let isDragging = false; // Track if mouse button is being held down

export function init() {
    console.log("View kører");

    createBoardView();

    document.querySelector("#destroy-btn").addEventListener("click", destroyThemAllClick);

    document.querySelector("#start-pause-btn").addEventListener("click", startPauseGameClick);

    // Stop dragging when the mouse button is released
    window.addEventListener("mouseup", () => {
        isDragging = false;
    });
}

function startPauseGameClick() {
    controller.startPauseGame();
}

function destroyThemAllClick() {
    controller.destroyThemAll();
}

export function createBoardView() {
    const board = document.querySelector("#board");

    board.style.setProperty("--GRID_WIDTH", controller.GRID_COLS);

    // Prevent the default drag behavior
    board.addEventListener("dragstart", (event) => {
        event.preventDefault();
    });

    for (let row = 0; row < controller.GRID_ROWS; row++) {
        for (let col = 0; col < controller.GRID_COLS; col++) {
            const cell = document.createElement("div");
            cell.dataset.row = row;
            cell.dataset.col = col;
            cell.classList.add("cell");
            cell.setAttribute("draggable", "false");

            // Start dragging when mouse is pressed down on a cell
            cell.addEventListener("mousedown", () => {
                isDragging = true;
                controller.createNewCell(row, col); // Trigger for initial click
            });

            // Detect when the mouse is over the cell and dragging
            cell.addEventListener("mouseenter", () => {
                if (isDragging) {
                    controller.createNewCell(row, col); // Trigger when dragging over the cell
                }
            });

            board.appendChild(cell);
        }
    }
}



export function updateBoardView(grid) {
    const button = document.querySelector("#start-pause-btn");

    if (controller.isGameRunning) {
        button.textContent = "Pause Game";
    } else {
        button.textContent = "Start Game";
    }

    document.querySelector("#generation-counter").textContent = controller.generationCounter;

    for (let row = 0; row < controller.GRID_ROWS; row++) {
        for (let col = 0; col < controller.GRID_COLS; col++) {
            const value = grid.get(row, col);

            const visualCell = document.querySelector(`[data-row="${row}"][data-col="${col}"]`);

            if (value === 1) {
                visualCell.classList.add("cell-active");
            } else if (value === 0) {
                visualCell.classList.remove("cell-active");
            }
        }
    }
}
