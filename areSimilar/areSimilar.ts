function areSimilar(a: number[], b: number[]): boolean {
    const bString = b.join('');

    if (a.join('') === b.join('')) { return true }

    for (let i = 0; i < a.length - 1; i++) {
        for (let j = i + 1; j < a.length; j++) {
            const tempArr = a;
            const tempNum1 = tempArr[i];
            const tempNum2 = tempArr[j];
            tempArr[i] = tempNum2;
            tempArr[j] = tempNum1;

            if (tempArr.join('') === b.join('')) {
                return true;
            }
        }
    }

    return false;
}

console.log(areSimilar([1, 2, 3], [1, 2, 3]));
console.log(areSimilar([1, 2, 3], [2, 1, 3]));
console.log(areSimilar([1, 2, 2], [2, 1, 1]));
