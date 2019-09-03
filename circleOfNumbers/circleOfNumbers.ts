function circleOfNumbers(n: number, firstNumber: number): number {
    const distAround = Math.floor((n - 2) / 2) + 1;

    return firstNumber + distAround;
}

console.log(circleOfNumbers(10, 2));