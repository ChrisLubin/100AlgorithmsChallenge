function avoidObstacles(inputArray: number[]): number {
    inputArray = inputArray.sort();
    let madeItToEnd = false;
    let jumpLength = 1;

    while (!madeItToEnd) {
        let currentLocation = 0;
        let hitObstacle = false;

        while (!hitObstacle) {
            currentLocation += jumpLength; // This is a jump

            hitObstacle = inputArray.some(num => num === currentLocation); // Check if we hit obstacle

            if (hitObstacle === false && currentLocation > Math.max(...inputArray)) {
                madeItToEnd = true;
                return jumpLength;
            }
        }

        jumpLength++;
    }
}

console.log(avoidObstacles([5, 3, 6, 7, 9]));