function reverseAString(str: string): string {
    let result = '';

    for (let i = str.length - 1; i >= 0; i--) {
        result += str[i];
    }

    // return str.split('').reverse().join('');
    return result;
}

console.log(reverseAString('hello'));
console.log(reverseAString('Howdy'));