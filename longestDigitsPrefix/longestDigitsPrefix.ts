function longestDigitsPrefix(inputString: string): string {
    let numPrefix = '';

    for (let i = 0; i < inputString.length; i++) {
        if (Number.isInteger(parseInt(inputString[i]))) {
            numPrefix += inputString[i];
        } else {
            break;
        }
    }

    return numPrefix;
}

console.log(longestDigitsPrefix('123aa1'));