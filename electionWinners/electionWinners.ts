function electionsWinners(votes: number[], k: number): number {
    let potentialWinners = 0;

    votes.forEach((candidateVotes, i) => {
        const potentialVotes = candidateVotes + k;
        let potentialWinner = true;

        votes.forEach((candidateVotes2, j) => {
            if (i !== j && (potentialVotes <= candidateVotes2 || candidateVotes === candidateVotes2)) {
                potentialWinner = false;
            }
        });

        if (potentialWinner) {
            potentialWinners++;
        }
    });

    return potentialWinners;
}

console.log(electionsWinners([2, 3, 5, 2], 3));