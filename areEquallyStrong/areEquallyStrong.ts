function areEquallyStrong(yourLeft: number, yourRight: number, friendsLeft: number, friendsRight: number): boolean {
    let yourStrongest;
    let yourWeakest;
    let friendsStrongest;
    let friendsWeakest;

    if (yourLeft >= yourRight) {
        yourStrongest = yourLeft;
        yourWeakest = yourRight;
    } else {
        yourStrongest = yourRight;
        yourWeakest = yourLeft;
    }
    if (friendsLeft >= friendsRight) {
        friendsStrongest = friendsLeft;
        friendsWeakest = friendsRight;
    } else {
        friendsStrongest = friendsRight;
        friendsWeakest = friendsLeft;
    }

    if (yourStrongest === friendsStrongest && yourWeakest === friendsWeakest) { return true }
    return false;
}

console.log(areEquallyStrong(10, 15, 15, 10))
console.log(areEquallyStrong(15, 10, 15, 10))
console.log(areEquallyStrong(15, 10, 15, 9))
