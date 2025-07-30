var moveZeroes = function(nums) {
    // 把不是0的全部填满，后面加上0
    // slow is the next position to put no - 0
    let slow = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[slow] = nums[i];
            slow++;
        }
    }
    for (let i = slow; i < nums.length; i++) {
        nums[i] = 0;
    }
}