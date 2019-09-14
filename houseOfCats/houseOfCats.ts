function houseOfCats(legs: number): number[] {
    const possibleNumPeople = [];

    for (let i = 1; i <= Math.floor(legs / 2); i++) {
        const humanLegs = i * 2;
        const legsLeft = legs - humanLegs;

        if (legsLeft % 4 === 0) {
            possibleNumPeople.push(i);
        }
    }

    return possibleNumPeople;
}

console.log(houseOfCats(6));
console.log(houseOfCats(2));