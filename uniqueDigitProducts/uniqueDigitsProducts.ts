function uniqueDigitProducts(a: number[]): number {
    const uniqueProducts = [];

    a.forEach(num => {
        const prodDigits = productOfDigits(num);

        if (!uniqueProducts.includes(prodDigits)) {
            uniqueProducts.push(prodDigits);
        }
    });

    return uniqueProducts.length;
}

function productOfDigits(num: number): number {
    let product = 1;
    const numArr = num.toString().split('');

    for (let i = 0; i < numArr.length; i++) {
        product *= parseInt(numArr[i]);
    }

    return product;
}

console.log(uniqueDigitProducts([2, 8, 121, 42, 222, 23]));