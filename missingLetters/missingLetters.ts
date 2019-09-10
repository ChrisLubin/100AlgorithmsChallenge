function missingLetters(str: string): string {
    for (let i = 0; i < str.length - 1; i++) {
        if (str.charCodeAt(i) + 1 !== str.charCodeAt(i + 1)) {
            return String.fromCharCode(str.charCodeAt(i) + 1);
        }
    }
}
console.log(missingLetters("bce"));
console.log(missingLetters("abce"));
console.log(missingLetters("abcdefghjklmno"));
console.log(missingLetters("abcdefghijklmnopqrstuvwxyz"));