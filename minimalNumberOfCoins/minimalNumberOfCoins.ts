function minimalNumberOfCoins(coins: number[], price: number): number {
    const sortedCoins = coins.sort((a, b) => b - a);
    let currentAmount = 0;
    let minCoins = 0;
    
    for (let i = 0; i < coins.length; i++) {
        while (currentAmount + coins[i] <= price) {
            currentAmount += coins[i];
            minCoins++;
        }

        if (currentAmount === price) {
            return minCoins;
        }
    }
}

console.log(minimalNumberOfCoins([1, 2, 10], 28));