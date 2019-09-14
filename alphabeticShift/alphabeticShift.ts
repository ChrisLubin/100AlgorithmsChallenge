function alphabeticShift(inputString: string): string {
    console.log(String.fromCharCode(97)) // a
    console.log(String.fromCharCode(122)) // z

    const stringArr = inputString.split('');

    for (let i = 0; i < inputString.length; i++) {
        if (inputString.charCodeAt(i) === 122) {
            stringArr[i] = 'a';
        } else {
            stringArr[i] = String.fromCharCode(inputString.charCodeAt(i) + 1);
        }
    }

    return stringArr.join('');
}

console.log(alphabeticShift('crazy'));