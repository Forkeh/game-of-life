export default class Grid {
    constructor(rows, cols) {
        const newGrid = new Array(rows);

        for (let row = 0; row < newGrid.length; row++) {
            newGrid[row] = new Array(cols).fill(0);
        }
        // console.log(newGrid);

        this.grid = newGrid;
    }

    dump() {
        console.table(this.grid);
    }

    set(param1, value, param2) {
        const { row, col } = this.paramConversion(param1, param2);

        const cell = this.grid[row][col];

        if (typeof cell === "number") {
            this.grid[row][col] = value;
        }
    }

    get(param1, param2) {
        const { row, col } = this.paramConversion(param1, param2);
        // console.log("GET row:", row, "col:", col);
        

        // Check if out of bounds
        if (row >= this.rows() || row < 0 || col >= this.cols() || col < 0) {
            console.log("OUT OF BOUNDS");

            return undefined;
        }

        const cell = this.grid[row][col];
        // console.log("GET CELL:", cell);
        return cell;
    }

    indexFor(param1, param2) {
        const { row, col } = this.paramConversion(param1, param2);

        if (row > this.rows() - 1 || col > this.cols() - 1) return;

        return row * this.cols() + col;
    }

    rowColFor(index) {
        if (index > this.size() - 1) return;

        const numCols = this.cols(); // Get the number of columns in the grid
        const row = Math.floor(index / numCols); // Calculate the row number
        const col = index % numCols; // Calculate the column number
        return { row, col };
    }

    neighbours(param1, param2) {
        const { row, col } = this.paramConversion(param1, param2);
        const neighbours = [];

        // TODO: Can code be made smarter with less loops?
        for (let y = -1; y <= 1; y++) {
            for (let x = -1; x <= 1; x++) {
                if (!(x === 0 && y === 0)) {
                    const index = this.indexFor(row + y, col + x);

                    if (index) {
                        const rowColObj = this.rowColFor(index);
                        neighbours.push(rowColObj);
                    }
                }
            }
        }
        console.log("neighbours", neighbours);
        return neighbours;
    }

    neighbourValues(param1, param2) {
        const { row, col } = this.paramConversion(param1, param2);

        const neighbours = this.neighbours(row, col);
        const neighboursValues = [];

        // TODO: Can code be made smarter with less loops?
        for (let i = 0; i < neighbours.length; i++) {
            const current = neighbours[i];
            const value = this.get(current.row, current?.col);
            neighboursValues.push(value);
        }
        console.log("neighbour values:", neighboursValues);
        return neighboursValues;
    }

    nextInRow(param1, param2) {
        const { row, col } = this.paramConversion(param1, param2);

        const value = this.get(row + 1, col);

        if (value) {
            return { row: row + 1, col, value };
        } else {
            return undefined;
        }
    }

    nextInCol(param1, param2) {
        const { row, col } = this.paramConversion(param1, param2);

        const value = this.get(row, col + 1);

        if (value) {
            return { row, col: col + 1, value };
        } else {
            return undefined;
        }
    }

    north(param1, param2) {
        const { row, col } = this.paramConversion(param1, param2);

        if (row - 1 < 0) {
            return undefined;
        }

        const value = this.get(row - 1, col);

        return { row: row - 1, col, value };
    }

    south(param1, param2) {
        const { row, col } = this.paramConversion(param1, param2);

        if (row + 1 >= this.rows()) {
            return undefined;
        }

        const value = this.get(row + 1, col);

        return { row: row + 1, col, value };
    }

    west(param1, param2) {
        const { row, col } = this.paramConversion(param1, param2);

        if (col - 1 < 0) {
            return undefined;
        }

        const value = this.get(row, col - 1);

        return { row, col: col - 1, value };
    }

    east(param1, param2) {
        const { row, col } = this.paramConversion(param1, param2);

        if (col + 1 >= this.cols()) {
            return undefined;
        }

        const value = this.get(row, col + 1);

        return { row, col: col + 1, value };
    }

    rows() {
        return this.grid.length;
    }

    cols() {
        return this.grid[0].length;
    }

    size() {
        return this.rows() * this.cols();
    }

    fill(value) {
        for (let row = 0; row < this.grid.length; row++) {
            for (let col = 0; col < this.grid[row].length; col++) {
                this.grid[row][col] = value;
            }
        }
    }

    paramConversion(param1, param2) {
        if (typeof param1 === "number" && typeof param2 === "number") {
            return { row: param1, col: param2 };
        } else if (typeof param1 === "object") {
            return param1;
        }
        throw new Error("Invalid conversion arguments");
    }
}
