function growingPlant(upSpeed: number, downSpeed: number, desiredHeight: number): number {
    let height = 0;
    let days = 0;

    while (height < desiredHeight) {
        height += upSpeed;
        days++;

        if (height < desiredHeight) {
            height -= downSpeed;
        }
    }

    return days;
}

console.log(growingPlant(100, 10, 910))