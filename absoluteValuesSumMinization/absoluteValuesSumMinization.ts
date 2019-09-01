function absoluteValuesSumMinimization(a: number[]): number {
    const odd = a.length % 2;

    return odd ? a[Math.floor(a.length / 2)] : a[Math.floor(a.length / 2) - 1];
}

console.log(absoluteValuesSumMinimization([2, 4, 7]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6, 8]));