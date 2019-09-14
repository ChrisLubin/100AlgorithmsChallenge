function seatsInTheater(nCols: number, nRows: number, col: number, row: number): number {
    const peopleBehind = nRows - row;
    const peopleToLeft = nCols - col;

    return peopleBehind + (peopleToLeft * peopleBehind);
}

console.log(seatsInTheater(16, 11, 5, 3));