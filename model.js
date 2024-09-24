import Grid from "./grid.js";

export function init() {
    console.log("Model kører");
}

export let grid;

export function createModel(rows, cols, spawnChance) {
    grid = new Grid(rows, cols);

    randomStartingCells(rows, cols, spawnChance);

    console.table(grid);
}

function randomStartingCells(rows, cols, spawnChance) {
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            if (Math.random() < spawnChance) {
                grid.set(row, 1, col);
            }
        }
    }
}

function countNeighbours(row, col) {
    console.log("-------------- countNeighbours --------------");

    let count = 0;
    for (let y = -1; y <= 1; y++) {
        for (let x = -1; x <= 1; x++) {
            if (!(x === 0 && y === 0)) {
                const value = grid.get(row + y, col + x);
                if (typeof value === "number") {
                    count += value;
                }
            }
        }
    }
    return count;
}

export function getNextGeneration(rows, cols) {
    //     lav en nyt tomt grid kaldet nextGeneration
    // scan igennem den eksisterende model
    //  for hver celle:
    //    beregn antal naboer
    //    beslut hvad der skal ske
    //    skriv resultatet ind i nextGeneration

    // erstat model med nextGeneration
    console.log("------------------------");
    console.log("NEXT GEN");
    console.log("------------------------");

    const nextGenGrid = new Grid(rows, cols);

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            const value = grid.get(row, col);
            console.log("VALUE:", value);
            const nbrs = countNeighbours(row, col);
            console.log("nbrs:", nbrs);

            let newValue;

            if (nbrs < 2 || nbrs > 3) {
                newValue = 0;
            }
            if (nbrs === 2) {
                newValue = value;
            }
            if (nbrs === 3) {
                newValue = 1;
            }
            console.log("newValue:", newValue);

            nextGenGrid.set(row, newValue, col);
        }
    }
    console.log("oldGrid:", grid);
    grid = nextGenGrid;
    console.log("nexgGenGrid:", grid);
}
