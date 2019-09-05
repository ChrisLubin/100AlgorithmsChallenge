function firstDuplicate(a: number[]): number {
    let smallestDuplicate = [-1];

    for (let i = 0; i < a.length - 1; i++) {
        for (let j = i + 1; j < a.length; j++) {
            if (a[i] === a[j]) {
                if (smallestDuplicate[0] === -1) {
                    smallestDuplicate[0] = a[j];
                    smallestDuplicate[1] = j;
                    break;
                }

                if (j < smallestDuplicate[1]) {
                    smallestDuplicate[0] = a[j];
                    smallestDuplicate[1] = j;
                }
            }
        }
    }

    return smallestDuplicate[0];
}

console.log(firstDuplicate([2, 1, 3, 5, 3, 2]));
console.log(firstDuplicate([2, 4, 3, 5, 1]));
