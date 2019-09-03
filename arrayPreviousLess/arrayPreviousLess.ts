function arrayPreviousLess(items: number[]): number[] {
    const holdArray: number[] = [];

    for (let i = 0; i < items.length; i++) {
        let rightmostSmallest = undefined;

        for (let j = 0; j < i; j++) {
            if (items[j] < items[i]) {
                rightmostSmallest = items[j];
            }
        }

        if (rightmostSmallest === undefined) {
            holdArray.push(-1);
        } else {
            holdArray.push(rightmostSmallest);
        }
    }

    return holdArray;
}

console.log(arrayPreviousLess([3, 5, 2, 4, 5]));