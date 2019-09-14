function squareDigitsSequence(a0: number): number {
    const sequence = [a0];
    let i = 0;

    while (true) {
        const newNum = squareDigitsSum(sequence[i]);

        if (sequence.includes(newNum)) {
            return sequence.length + 1;
        }

        sequence.push(newNum);
        i++;
    }
}

function squareDigitsSum(num: number): number {
    const numArray = num.toString().split('');
    let sum = 0;
    
    return numArray.reduce((acc, num) => {
        return acc + (Math.pow(parseInt(num), 2));
    }, sum);
}

console.log(squareDigitsSequence(16));
console.log(squareDigitsSequence(103));