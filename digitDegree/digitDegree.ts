function digitDegree(n: number): number {
    let digits = n;
    let count = 0;

    while (true) {
        if (digits.toString().length === 1) {
            return count;
        } else {
            count++;
        }

        const numArray = digits.toString().split('');
        digits = numArray.reduce((acc, num) => {
            return acc + parseInt(num);
        }, 0);
    }
}

console.log(digitDegree(5));
console.log(digitDegree(10));
console.log(digitDegree(91));