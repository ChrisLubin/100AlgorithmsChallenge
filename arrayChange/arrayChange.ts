function arrayChange(inputArray: number[]): number {
    let count = 0;

    for (let i = 0; i < inputArray.length - 1; i++) {
        while (inputArray[i] >= inputArray[i + 1]) {
            inputArray[i + 1]++;
            count ++;
        }
    }

    return count;
}

console.log(arrayChange([1, 1, 1]));