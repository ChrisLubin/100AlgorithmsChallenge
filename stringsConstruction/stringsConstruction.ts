function stringsConstruction(a: string, b: string): number {
    const letterFrequencies = {};
    let count = 0;

    for (let i = 0; i < b.length; i++) {
        if (letterFrequencies.hasOwnProperty(b[i])) {
            letterFrequencies[b[i]]++;
        } else {
            letterFrequencies[b[i]] = 1;
        }
    }

    while (true) {
        for (let i = 0; i < a.length; i++) {
            if (letterFrequencies.hasOwnProperty(a[i])) {
                if (letterFrequencies[a[i]] > 0) {
                    letterFrequencies[a[i]]--;
                } else {
                    return count;
                }
            } else {
                return count;
            }
        }
        
        count++;
    }
}

console.log(stringsConstruction('abc', 'abccba'));