function addTwoDigits(n: any): number {
    const number = n.toString();

    return parseInt(number[0]) + parseInt(number[1]);
}

console.log(addTwoDigits(29));