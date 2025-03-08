// https://leetcode.com/problems/contains-duplicate/

var containsDuplicate = function(nums) {
    nums.sort((a, b) => a - b);

    for(let i=1; i<nums.length; i++) {
        if(nums[i] === nums[i - 1]) {
            return true;
        }
    }

    return false;
};

// Time Complexity:- O(N*logN)
// Space Complexity: O(1)