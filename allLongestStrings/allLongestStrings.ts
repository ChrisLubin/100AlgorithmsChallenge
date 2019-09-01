function allLongestStrings(inputArray: string[]): string[] {
    let longestStringLen = 0;

    inputArray.forEach(string => {
        if ( string.length > longestStringLen ) { longestStringLen = string.length }
    });

    return inputArray.filter(string => string.length === longestStringLen);
}

console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"]));