function alphabetSubsequence(s: string): boolean {
    let currentMaxCharCode = 0;

    for (let i = 0; i < s.length; i++) {
        // Make sure character is in the alphabet
        if ( !((s.charCodeAt(i) >= 65 && s.charCodeAt(i) <= 90) || (s.charCodeAt(i) >= 97 && s.charCodeAt(i) <= 122)) ) {
            return false;
        }

        if ( s.charCodeAt(i) <= currentMaxCharCode ) {
            return false;
        }
        currentMaxCharCode = s.charCodeAt(i);
    }

    return true;
}

console.log(alphabetSubsequence('zab'))
console.log(alphabetSubsequence('effg'))
console.log(alphabetSubsequence('cdce'))
console.log(alphabetSubsequence('ace'))
console.log(alphabetSubsequence('bxz'))
