function containsDuplicates(a: number[]): boolean {
    for (let i = 0; i < a.length - 1; i++) {
        const num = a[i];

        for (let j = i + 1; j < a.length; j++) {
            if (num === a[j]) {
                return true;
            }
        }
    }

    return false;
}

console.log(containsDuplicates([1, 2, 3, 1]));
console.log(containsDuplicates([3, 1]));
