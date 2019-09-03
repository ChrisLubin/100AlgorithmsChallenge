function chunkyMonkey(arr: any[], size: number): any[][] {
    let count = 0;
    let i = 0;
    const arrays = [];

    while (i < arr.length) {
        const temp = [];
        count = 0;

        while (count < size) {
            temp.push(arr[i]);
            count++;
            i++;

            if (count === size) {
                arrays.push(temp);
            } else if (i === arr.length) {
                arrays.push(temp);
                break;
            }
        }
    }

    return arrays;
}

console.log(chunkyMonkey(["a", "b", "c", "d"], 2));
console.log(chunkyMonkey([0, 1, 2, 3, 4, 5], 4));