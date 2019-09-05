function evenDigitsOnly(n: number): boolean {
    const numArray = n.toString().split('');
    for (let i = 0; i < numArray.length; i++) {
        if (parseInt(numArray[i]) % 2 !== 0) {
            return false;
        }
    }

    return true;
}

console.log(evenDigitsOnly(248622));
console.log(evenDigitsOnly(642386));