function makeArrayConsecutive2(statues: number[]): number {
    const sortedStatues = statues.sort();
    let extraNeeded = 0;

    for (let i = 0; i < statues.length - 1; i++) {
        if (sortedStatues[i + 1] !== sortedStatues[i] + 1) {
            extraNeeded += sortedStatues[i + 1] - sortedStatues[i] - 1;
        }
    }

    return extraNeeded;
}

console.log(makeArrayConsecutive2([6, 2, 3, 8]));