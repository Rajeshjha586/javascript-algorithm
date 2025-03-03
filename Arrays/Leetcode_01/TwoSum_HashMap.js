// https://leetcode.com/problems/two-sum/description/
var twoSum = function(nums, target) {
    const map = new Map();
    for(let i=0; i<nums.length; i++) {
        let num = nums[i];
        let moreNeeded = target - num;

        if(map.has(moreNeeded)) {
            return [map.get(moreNeeded), i];
        }

        map.set(num, i);
    }
};

// Time Complexity :- O(N) 
// Space Complexity :- O(N)