function arrayConversion(inputArray: number[]): number {
    let count = 0;

    while (inputArray.length !== 1) {
        console.log(count % 2)
        const isEven = count % 2 ? true : false;
        const temp = []

        if (isEven) {
            for (let i = 0; i < inputArray.length - 1; i += 2) {
                const product = inputArray[i] * inputArray[i + 1];
                temp.push(product);
            }
            inputArray = temp;
        } else {
            for (let i = 0; i < inputArray.length - 1; i += 2) {
                const sum = inputArray[i] + inputArray[i + 1];
                temp.push(sum);
            }
            inputArray = temp;
        }

        count++;
    }

    return inputArray[0];
}

console.log(arrayConversion([1, 2, 3, 4, 5, 6, 7, 8]));
