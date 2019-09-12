function reflectString(inputString: string): string {
    let newStringArr = [];
    // b = 98
    // x = 98 + 23

    for (let i = 0; i < inputString.length; i++) {
        const diff = inputString.charCodeAt(i) - 97;
        newStringArr.push(String.fromCharCode(inputString.charCodeAt(i) + 25 - (diff * 2)));
    }

    return newStringArr.join('');
}

console.log(reflectString("name"));
