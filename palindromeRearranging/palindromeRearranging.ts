function palindromeRearranging(inputString: string): boolean {
    const charCount = {};
    let notOddCount = 0;

    inputString.split('').forEach(char => {
        if (!charCount[char]) {
            charCount[char] = 1;
        } else {
            charCount[char]++;
        }
    });

    for (let key in charCount) {
        if (charCount[key] % 2 !== 0) {
            notOddCount++;

            if (notOddCount > 1) {
                return false;
            }
        }
    }

    return true;
}

console.log(palindromeRearranging('aadbb'));