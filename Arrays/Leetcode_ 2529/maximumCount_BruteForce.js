// https://leetcode.com/problems/maximum-count-of-positive-integer-and-negative-integer/description/

var maximumCount = function(nums) {
    let numOfPositive = 0;
    let numOfNegative = 0;
    
    for(let i=0; i<nums.length; i++) {
        if(nums[i] > 0) {
            numOfPositive++;
        } else if(nums[i] < 0) {
            numOfNegative++ 
        }
    }
    
    return Math.max(numOfPositive, numOfNegative);
};

// Time Complexity :- O(N)
// Space Complexity:- O(1)