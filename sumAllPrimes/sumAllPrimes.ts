function sumAllPrimes(num: number): number {
    let sum = 0;

    for (let i = 2; i <= num; i++) {
        if (isPrimeNumber(i)) {
            sum += i;
        }
    }

    return sum;
}

function isPrimeNumber(num: number): boolean {
    if (num < 1) { return false }

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;
}

console.log(sumAllPrimes(10));
console.log(sumAllPrimes(977));