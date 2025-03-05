// https://leetcode.com/problems/contains-duplicate/

var containsDuplicate = function(nums) {
    for(let i=0; i<nums.length; i++) {
        for(let j=i+1; j<nums.length; j++) {
            if(nums[i] === nums[j]) {
                return true;
            }
        }
    }

    return false;
};

// Time Complexity:- O(N2)
// Space Complexity: O(1)