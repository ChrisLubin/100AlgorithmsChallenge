function checkPalindrome(inputString: string): boolean {
    const reversedString = inputString.split('').reverse().join('');

    return inputString === reversedString ? true : false;
}

console.log(checkPalindrome('aabaa'));
console.log(checkPalindrome('abac'));
console.log(checkPalindrome('a'));
