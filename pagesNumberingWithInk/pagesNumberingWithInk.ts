function pagesNumberingWithInk(current: number, numberOfDigits: number): number {
    let digitsLeft = numberOfDigits;
    let currentNum = current;
    let currentLength = currentNum.toString().length;

    while (digitsLeft >= currentLength) {
        currentLength = currentNum.toString().length;

        digitsLeft -= currentLength;
        currentNum++;
    }

    return currentNum - 1;
}

console.log(pagesNumberingWithInk(1, 5));
console.log(pagesNumberingWithInk(21, 5));
console.log(pagesNumberingWithInk(8, 4));