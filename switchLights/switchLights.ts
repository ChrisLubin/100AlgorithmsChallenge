function switchLights(a: number[]): number[] {
    for (let i = 0; i < a.length; i++) {
        if (a[i]) {
            for (let j = i; j >= 0; j--) {
                if (a[j]) {
                    a[j] = 0;
                } else {
                    a[j] = 1;
                }
            }
        }
    }

    return a;
}


console.log(switchLights([1, 1, 1, 1, 1]));
console.log(switchLights([0, 0]));