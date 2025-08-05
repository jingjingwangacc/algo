var sortColors = function(nums) {
    let p0 = 0, cur = 0, p2 = nums.length - 1;
    while (cur <= p2) {
        if (nums[cur] === 0) {
            [nums[cur], nums[p0]] = [nums[p0], nums[cur]];
            cur++;
            p0++;
        } else if (nums[cur] === 2) {
            [nums[cur], nums[p2]] = [nums[p2], nums[cur]];
            p2--;
        } else {
            cur++;
        }
    }
}