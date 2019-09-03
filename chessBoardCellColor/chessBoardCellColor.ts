function chessBoardCellColor(cell1: string, cell2: string): boolean {
    const board = {
        "A": 1,
        "B": 2,
        "C": 3,
        "D": 4,
        "E": 5,
        "F": 6,
        "G": 7,
        "H": 8
    }

    const cell1X = board[cell1[0]];
    const cell1Y = parseInt(cell1[1]);
    const cell2X = board[cell2[0]];
    const cell2Y = parseInt(cell2[1]);
    const cell1Color = (cell1X % 2 === 0 && cell1Y % 2 === 0) || (cell1X % 2 === 1 && cell1Y % 2 === 1) ? 'brown' : 'caramel';
    const cell2Color = (cell2X % 2 === 0 && cell2Y % 2 === 0) || (cell2X % 2 === 1 && cell2Y % 2 === 1) ? 'brown' : 'caramel';

    return cell1Color === cell2Color ? true : false;
}

console.log(chessBoardCellColor('A1', 'C3'));
console.log(chessBoardCellColor('A1', 'H3'));
