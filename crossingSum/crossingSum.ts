function crossingSum(matrix: number[][], a: number, b: number): number {
    let sum = 0;

    sum = matrix[a].reduce((acc, num) => {
        return acc + num;
    }, 0);

    matrix.forEach((array , i) => {
        if (i !== a) {
            sum += array[b];
        }
    });

    return sum;
}

console.log(crossingSum([[1, 1, 1, 1], 
    [2, 2, 2, 2], 
    [3, 3, 3, 3]], 1, 3));