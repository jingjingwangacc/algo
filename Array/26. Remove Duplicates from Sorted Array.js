var removeDuplicates = function(nums) {
    // nonDup is the not dup index
    let nonDup = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[nonDup] !== nums[i]) {
            nonDup++;
            nums[nonDup] = nums[i];
        }
    }
    return nonDup + 1;
};