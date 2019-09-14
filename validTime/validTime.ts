function validTime(time: string): boolean {
    const hour = parseInt(time[0] + time[1]);
    const min = parseInt(time[3] + time[4]);

    if ((hour >= 0 && hour <= 24) && (min >= 0 && min <= 60)) {
        return true;
    } else {
        return false;
    }
}

console.log(validTime('13:58'));
console.log(validTime('25:51'));
console.log(validTime('02:76'));