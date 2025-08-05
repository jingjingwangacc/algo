var removeDuplicates = function(nums) {
    // insert is the position to put valid element
    // time: O(n), space: O(1)
    let insert = 1, count = 1;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1]) {
            // new element
            nums[insert] = nums[i];
            insert++;
            count = 1;
        } else {
            count++;
            if (count < 3) {
                // valid, can put insert
                nums[insert] = nums[i];
                insert++;
            }
        }
    }
    return insert;
};