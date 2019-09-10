function mostFrequentDigitSum(n: number): number {
    const firstSeq = [n];
    let sumOfDigits = [];
    const numFrequencies = [];
    let mostFreqNum;

    step(n, firstSeq);
    
    sumOfDigits = firstSeq.map(num => {
        return num.toString().split('').reduce((acc, num) => {
            return acc + parseInt(num);
        }, 0);
    });

    sumOfDigits.forEach(num => {
        if (!numFrequencies[num]) {
            numFrequencies[num] = 1;
        } else {
            numFrequencies[num]++;
        }
    });

    numFrequencies.forEach((freq, i) => {
        if (i === 0) {
            mostFreqNum = [i, freq];
        } else {
            if (freq > mostFreqNum[1]) {
                mostFreqNum = [i, freq];
            } else if (freq === mostFreqNum[1] && i > mostFreqNum[0]) {
                mostFreqNum = [i, freq];
            }
        }
    });

    return mostFreqNum[0];
}

function step(x: number, arr: number[]) {
    let sum = 0;

    x.toString().split('').forEach(num => sum += parseInt(num));
    arr.push(x - sum);

    if (x - sum > 0) {
        step(x - sum, arr);
    }
}

console.log(mostFrequentDigitSum(88));
console.log(mostFrequentDigitSum(8));