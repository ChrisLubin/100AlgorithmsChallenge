function companyBotStrategy(trainingData: number[][]): number {
    let sum = 0;
    let botsCorrect = 0;

    trainingData.forEach(data => {
        if (data[1] === 1) {
            sum += data[0];
            botsCorrect++;
        }
    });

    return botsCorrect ? sum / botsCorrect : 0;
}

console.log(companyBotStrategy([[3, 1], [6, 1], [4, 1], [5, 1]]));
console.log(companyBotStrategy([[4, 1], [4, -1], [0, 0], [6, 1]]));
console.log(companyBotStrategy( [[4, -1], [0, 0], [5, -1]]));
