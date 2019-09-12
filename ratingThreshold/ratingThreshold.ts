function ratingThreshold(threshold: number, ratings: number[][]): number[] {
    const needToReview = [];

    ratings.forEach((proRatings, i) => {
        let ratingCount = proRatings.length;
        let sum = 0;

        proRatings.forEach(rating => {
            sum += rating;
        });

        const avg = sum / ratingCount;

        if (avg < threshold) {
            needToReview.push(i);
        }
    });

    return needToReview;
}

console.log(ratingThreshold(3.5, 
    [[3, 4],
    [3, 3, 3, 4],
    [4]]));