function alternatingSums(a: number[]): number[] {
    const totals: number[] = [0, 0]
    a.forEach((num, i) => {
        i % 2 === 0 ? totals[0] += num : totals[1] += num;
    });

    return totals;
}

console.log(alternatingSums([50, 60, 60, 45, 70]))