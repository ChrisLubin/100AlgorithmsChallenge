function boxBlur(image: number[][]): number[][] {
    const res: number[][] = [];

    for (let row = 0; row < image.length - 2; row++) {
        const temp: number[] = [];

        for (let col = 0; col < image[0].length - 2; col++) {
            let sum = 0;

            sum += image[row][col] + image[row][col+1] + image[row][col+2];
            sum += image[row+1][col] + image[row+1][col+1] + image[row+1][col+2];
            sum += image[row+2][col] + image[row+2][col+1] + image[row+2][col+2];

            temp.push(Math.floor(sum / 9));
        }

        res.push(temp);
    }

    return res;
}

console.log(boxBlur([[1, 1, 1], 
    [1, 7, 1], 
    [1, 1, 1]]));
console.log(boxBlur([[7, 4, 0, 1], 
    [5, 6, 2, 2], 
    [6, 10, 7, 8],
    [1, 4, 2, 0]]));