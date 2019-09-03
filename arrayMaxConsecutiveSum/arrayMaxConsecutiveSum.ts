function arrayMaxConsecutiveSum(inputArray: number[], k: number): number {
    let max = 0;

    for (let i = 0; i < inputArray.length - k + 1; i++) {
        let sum = 0;

        for (let j = 0; j < k; j++) {
            sum += inputArray[i + j];
        }

        if (sum > max) {
            max = sum;
        }
    }

    return max;
}

console.log(arrayMaxConsecutiveSum([2, 3, 5, 1, 6], 2));
console.log(arrayMaxConsecutiveSum([2, 3, 5, 1, 6], 3));