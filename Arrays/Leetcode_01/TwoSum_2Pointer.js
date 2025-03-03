// https://leetcode.com/problems/two-sum/description/

//Greedy Aproach
var twoSum = function(nums, target) {
    let sortedArr = nums.map((val, index) => ({ val, index })).sort((a, b) => a.val - b.val);
    
    let left = 0;
    let right = sortedArr.length - 1;

    while (left < right) {
        let sum = sortedArr[left].val + sortedArr[right].val;

        if (sum === target) {
            return [sortedArr[left].index, sortedArr[right].index];
        } else if (sum < target) {
            left++;
        } else {
            right--;
        }
    }
}

// Time Complexity :- O(N + NlogN)
// Space Complexity :- O(N)