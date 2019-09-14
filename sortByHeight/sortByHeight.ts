function sortByHeight(a: number[]): number[] {
    let i = 0;
    let temp = [];
    let length = 0;
    let startIndex;

    while (i < a.length) {
        if (a[i] !== -1) {
            temp.push(a[i]);
            if (length !== -1) {
                length++;
            } else {
                startIndex = i;
                length = 1;
            }
        } else {
            if (length !== -1) {
                temp = temp.sort();
                let currIndex = 0;
                for (let j = startIndex; j < (startIndex + length); j++) {
                    a[j] = temp[currIndex];
                    currIndex++;
                }
            }
            length = -1;
            temp = [];
        }

        i++;
    }

    return a;
}

console.log(sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]));