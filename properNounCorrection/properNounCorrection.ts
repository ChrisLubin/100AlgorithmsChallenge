function properNounCorrection(noun: string): string {
    let properNoun = noun.split('');
    properNoun[0] = properNoun[0].toUpperCase();

    for (let i = 1; i < noun.length; i++) {
        properNoun[i] = properNoun[i].toLowerCase();
    }

    return properNoun.join('');
}

console.log(properNounCorrection('pARiS'));
console.log(properNounCorrection('John'));