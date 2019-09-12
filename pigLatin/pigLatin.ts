function pigLatin(str: string): string {
    const vowels = ['a', 'e', 'i', 'o', 'u'];

    if (vowels.includes(str[0])) {
        return `${str}way`;
    } else {
        const result  = str.split('');
        result.push(result.shift());

        for (let i = 1; i < str.length; i++) {
            if (!vowels.includes(str[i])) {
                result.push(result.shift());
            } else {
                return `${result.join('')}ay`;
            }
        }
    }
}

console.log(pigLatin("glove"));
console.log(pigLatin("eight"));
