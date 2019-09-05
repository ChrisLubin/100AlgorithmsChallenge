function containsCloseNums(nums: number[], k: number): boolean {
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        let count = 0;
        let j = i;

        while (j < nums.length - 1 && count < k) {
            j++;
            count++;

            if (num === nums[j]) {
                return true;
            }
        }
    }

    return false;
}

console.log(containsCloseNums([0, 1, 2, 3, 5, 2], 3));
console.log(containsCloseNums([0, 1, 2, 3, 5, 2], 2));