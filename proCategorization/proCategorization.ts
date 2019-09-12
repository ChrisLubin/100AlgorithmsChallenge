function proCategorization(pros: string[], preferences: string[][]): string[][][] {
    const services = [];
    let result = [];

    preferences.forEach(preferenceArray => {
        preferenceArray.forEach(service => {
            if (!services.includes(service)) {
                services.push(service);
            }
        });
    });

    result = services.sort().map(service => {
        return [service, []];
    });

    services.forEach((service, i) => {
        preferences.forEach((prefernceArray, j) => {
            if (prefernceArray.includes(service)) {
                result[i][1].push(pros[j]);
            }
        });
    });

    return result;
}

console.log(proCategorization(["Jack", "Leon", "Maria"], [["Computer repair", "Handyman", "House cleaning"],
["Computer lessons", "Computer repair", "Data recovery service"],
["Computer lessons", "House cleaning"]]));