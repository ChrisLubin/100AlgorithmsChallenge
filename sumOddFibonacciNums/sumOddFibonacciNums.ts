function sumOddFibonacciNums(num: number): number {
    const fibNums = [1 , 1];
    let i = 1;
    let sum = 0;

    while (fibNums[i] + fibNums[i - 1] <= num) {
        fibNums.push(fibNums[i] + fibNums[i - 1]);
        i++;
    }

    fibNums.forEach(num => {
        if (num % 2 !== 0) {
            sum += num;
        }
    });

    return sum;
}

console.log(sumOddFibonacciNums(10));
console.log(sumOddFibonacciNums(1000));
console.log(sumOddFibonacciNums(4000000));