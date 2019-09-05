function fancyRide(l: number, fares: number[]): string {
    for (let i = fares.length - 1; i >= 0; i--) {
        if (l * fares[i] <= 20) {
            switch (i) {
                case 0:
                    return "Uberx";
                case 1:
                    return "UberXL";
                case 2:
                    return "UberPlus";
                case 3:
                    return "UberBlack";
                case 4:
                    return "UberSUV";
            }
        }
    }
}

console.log(fancyRide(30, [0.3, 0.5, 0.7, 1, 1.3]));