function newNumeralSystem(number: string): string[] {
    const numConverted = number.charCodeAt(0) - 65;
    const result = [];

    for (let i = 0; i < numConverted; i++) {
        for (let j = i; j <= numConverted; j++) {
            if (i + j === numConverted) {
                result.push(`${String.fromCharCode(i + 65)} + ${String.fromCharCode(j + 65)}`);
            }
        }
    }

    return result;
}   

console.log(newNumeralSystem('G'));