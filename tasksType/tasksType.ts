function tasksTypes(deadlines: number[], day: number): number[] {
    const result = [0, 0, 0];

    for (let i = 0; i < deadlines.length; i++) {
        if (deadlines[i] <= day) {
            result[0]++;
        } else if (deadlines[i] >= day + 1 && deadlines[i] <= day + 7) {
            result[1]++;
        } else {
            result[2]++;
        }
    }

    return result;
}

console.log(tasksTypes([1, 2, 3, 4, 5], 2));
console.log(tasksTypes([1, 2, 4, 2, 10, 3, 1, 4, 5, 4, 9, 8], 1));
