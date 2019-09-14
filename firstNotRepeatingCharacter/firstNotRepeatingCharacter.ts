function firstNotRepeatingCharacter(s: string): string {
    let strArr = s.split('');
    const seenAlready = [];

    for (let i = 0; i < s.length; i++) {
        const letter = s[i];
        strArr.splice(i, 1);

        if (strArr.includes(letter)) {
            seenAlready.push(letter);
            strArr = s.split('');
        } else {
            if (!seenAlready.includes(letter)) {
                return letter;
            }
        }
    }

    return '_';
}

console.log(firstNotRepeatingCharacter('abacabad'));
console.log(firstNotRepeatingCharacter('abacabaabacaba'));
