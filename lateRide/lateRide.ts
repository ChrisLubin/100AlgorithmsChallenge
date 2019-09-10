function lateRide(n: number): number {
    const hour = Math.floor(n / 60);
    const min = n % 60;
    const hourString = hour.toString();
    const minString = min.toString();
    let sum = 0;

    if (hourString.length === 2) {
        sum += parseInt(hourString[0]);
        sum += parseInt(hourString[1]);
    } else {
        sum += parseInt(hourString[0]);
    }
    if (minString.length === 2) {
        sum += parseInt(minString[0]);
        sum += parseInt(minString[1]);
    } else {
        sum += parseInt(minString[0]);
    }

    return sum;
}

console.log(lateRide(240));
console.log(lateRide(808));
