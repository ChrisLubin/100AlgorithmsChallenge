function differentSymbolsNaive(s: string): number {
    const characters = {};
    let uniqueCount = 0;

    for (let i = 0; i < s.length; i++) {
        if (!characters[s[i]]) {
            characters[s[i]] = 1;
            uniqueCount++;
        }
    }

    return uniqueCount;
}

console.log(differentSymbolsNaive('cabca'));
