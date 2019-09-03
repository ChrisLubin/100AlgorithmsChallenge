function bishopAndPawn(bishop: string, pawn: string): boolean {
    const board = {
        a: 1,
        b: 2,
        c: 3,
        d: 4,
        e: 5,
        f: 6,
        g: 7,
        h: 8
    }
    const numBishopX = board[bishop[0]];
    const numBishopY = parseInt(bishop[1]);
    const numPawn = parseInt(board[pawn[0]].toString() + pawn[1]);
    let tempBishopX = numBishopX;
    let tempBishopY = numBishopY;

    while (tempBishopX < 8 && tempBishopY < 8) {
        tempBishopX++;
        tempBishopY++;

        if (tempBishopX.toString() === numPawn.toString()[0] && tempBishopY.toString() === numPawn.toString()[1]) {
            return true;
        }
    }

    tempBishopX = numBishopX;
    tempBishopY = numBishopY;

    while (tempBishopX < 8 && tempBishopY > 1) {
        tempBishopX++;
        tempBishopY--;

        if (tempBishopX.toString() === numPawn.toString()[0] && tempBishopY.toString() === numPawn.toString()[1]) {
            return true;
        }
    }

    tempBishopX = numBishopX;
    tempBishopY = numBishopY;

    while (tempBishopX > 1 && tempBishopY > 1) {
        tempBishopX--;
        tempBishopY--;

        if (tempBishopX.toString() === numPawn.toString()[0] && tempBishopY.toString() === numPawn.toString()[1]) {
            return true;
        }
    }

    tempBishopX = numBishopX;
    tempBishopY = numBishopY;

    while (tempBishopX > 1 && tempBishopY < 8) {
        tempBishopX--;
        tempBishopY++;

        if (tempBishopX.toString() === numPawn.toString()[0] && tempBishopY.toString() === numPawn.toString()[1]) {
            return true;
        }
    }

    return false;
}

console.log(bishopAndPawn('a1', 'c3'));
console.log(bishopAndPawn('a2', 'c3'));