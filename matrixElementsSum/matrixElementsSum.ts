function matrixElementsSum(matrix: any[][]): number {
    let suitableTotalCost = 0;

    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[0].length; col++) {
            if (row === 0) {
                suitableTotalCost += matrix[row][col];
            } else {
                let hauntedRoomAbove = false;

                for (let i = 0; i < row; i++) {
                    if (matrix[i][col] === 0) {
                        hauntedRoomAbove = true;
                        break;
                    }
                }

                if (!hauntedRoomAbove) {
                    suitableTotalCost += matrix[row][col];
                }
            }
        }
    }

    return suitableTotalCost;
}

console.log(matrixElementsSum(
    [[0, 1, 1, 2],
    [0, 5, 0, 0],
    [2, 0, 3, 3]]
));
