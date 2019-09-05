function fermactor(n: number): number[] {
    let d = new Date();
    const firstTime = d.getTime();

    for (let i = 1; i <= 200; i++) {
        for (let j = i; j <= 200; j++) {
            if (Math.pow(j, 2) - Math.pow(i, 2) === n) {
                return [j, i];
            }
        }
    }

    d = new Date();
    const secondTime = d.getTime();
    console.log(secondTime - firstTime);
}

console.log(fermactor(15));