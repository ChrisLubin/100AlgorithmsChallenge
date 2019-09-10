function isLucky(n: number): boolean {
    const numArr = n.toString().split('');
    let firstHalfSum = 0;
    let secondHalfSum = 0;

    for (let i = 0; i < numArr.length; i++) {
        if (i <= Math.floor((numArr.length - 1) / 2)) {
            firstHalfSum += parseInt(numArr[i]);
        } else {
            secondHalfSum += parseInt(numArr[i]);
        }
    }

    return firstHalfSum === secondHalfSum ? true : false;
}

console.log(isLucky(1230));
console.log(isLucky(239017));