function minesweeper(matrix: boolean[][]): number[][] {
    const minesweeper = matrix.map(row => {
        return row.map(field => {
            return 0;
        });
    });
    
    matrix.forEach((row, i) => {
        row.forEach((field, j) => {
            if (field) {
                if (i - 1 >= 0) { // Top
                    minesweeper[i - 1][j]++;
                }
                if (j + 1 < row.length) { // Right
                    minesweeper[i][j + 1]++;
                }
                if (i + 1 < matrix.length) { // Bottom
                    minesweeper[i + 1][j]++;
                }
                if (j - 1 >= 0) { // Left
                    minesweeper[i][j - 1]++;
                }
                if (i - 1 >= 0 && j + 1 < row.length) { // Top-right
                    minesweeper[i - 1][j + 1]++;
                }
                if (i + 1 < matrix.length && j + 1 < row.length) { // Bottom-right
                    minesweeper[i + 1][j + 1]++;
                }
                if (i + 1 < matrix.length && j - 1 >= 0) { // Bottom-left
                    minesweeper[i + 1][j - 1]++;
                }
                if (i - 1 >= 0 && j - 1 >= 0) { // Top-left
                    minesweeper[i - 1][j - 1]++;
                }
            }
        });
    });

    return minesweeper;
}

console.log(minesweeper([[true, false, false],
[false, true, false],
[false, false, false]]));