function integerToStringOfFixedWidth(number: number, width: number): string {
    let numStringArray = number.toString().split('');

    if (numStringArray.length > width) {
        while (numStringArray.length !== width) {
            numStringArray.shift();
        }
        return numStringArray.join('');
    } else if (numStringArray.length < width) {
        while (numStringArray.length !== width) {
            numStringArray.unshift('0');
        }
        return numStringArray.join('');
    } else {
        return numStringArray.join('');
    }
}

console.log(integerToStringOfFixedWidth(1234, 2));
console.log(integerToStringOfFixedWidth(1234, 4));
console.log(integerToStringOfFixedWidth(1234, 5));
