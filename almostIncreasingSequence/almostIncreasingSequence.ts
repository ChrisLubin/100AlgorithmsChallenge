function almostIncreasingSequence(sequence: number[]): boolean {
    let removeNumCount = 0;

    for (let i = 0; i < sequence.length - 1; i++) {
        if ( sequence[i] >= sequence[i + 1] ) {
            removeNumCount++;
            if (i <= sequence.length - 3) { // Check so we don't go out of array bounds
                if ( sequence[i] >= sequence[i + 2] ) {
                    return false;
                }
            }
        }
        if ( removeNumCount > 1 ) { return false }
    }

    return true;
}

console.log(almostIncreasingSequence([1, 3, 2, 1]))
console.log(almostIncreasingSequence([1, 3, 2])) 