function isCaseInsensitivePalindrome(inputString: string): boolean {
    const lowercaseInput = inputString.toLowerCase().split('');
    const tempArray = [];

    for (let i = lowercaseInput.length - 1; i >= 0; i--) {
        tempArray.push(lowercaseInput[i]);
    }

    if (lowercaseInput.toString() === tempArray.toString()) {
        return true;
    } else {
        return false;
    }
}

console.log(isCaseInsensitivePalindrome('AaBaa'));
console.log(isCaseInsensitivePalindrome('abac'));