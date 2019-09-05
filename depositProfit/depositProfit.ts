function depositProfit(deposit: number, rate: number, threshold: number): number {
    const growthRate = (deposit + rate) / deposit;
    let balance = deposit;
    let years = 0;

    for (let i = 0; balance < threshold; i++) {
        balance = balance * growthRate;
        years++;
    }

    return years;
}

console.log(depositProfit(100, 20, 170))