function composeRanges(nums: number[]): string[] {
    const ranges = [];
    let calculatingRange;
    let i = 0;

    while (i < nums.length) {
        let range = nums[i];
        calculatingRange = true;

        while (calculatingRange) {
            i++;

            if (i === nums.length - 1 && nums[i - 1] === range) {
                ranges.push(range);
                break;
            } else if (i === nums.length - 1 && nums[i - 1] === range) {
                ranges.push(range + "->" + nums[i - 1]);
                break;
            }

            if (nums[i] !== nums[i - 1] + 1 && nums[i - 1] === range) {
                ranges.push(range);
                calculatingRange = false;
            } else if (nums[i] !== nums[i - 1] + 1 && nums[i - 1] !== range) {
                ranges.push(range + "->" + nums[i - 1]);
                calculatingRange = false;
            }
        }
    }

    return ranges;
}


console.log(composeRanges([-1, 0, 1, 2, 6, 7, 9]));