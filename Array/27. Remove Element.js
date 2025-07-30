var removeElement = function(nums, val) {
    // time: O(n) Space: O(1)
    let notValIndex = 0;
    // notValIndex is the next position of not val element
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[notValIndex] = nums[i];
            notValIndex++;
        }
    }
    return notValIndex;
    
};