// https://leetcode.com/problems/partition-array-according-to-given-pivot/description/

var pivotArray = function(nums, pivot) {
    let result = new Array(nums.length).fill(0);
    let n = nums.length;
    let index = 0;

    // < pivot
    for(let i=0; i<n; i++) {
        if(nums[i] < pivot) {
            result[index++] = nums[i];
        }
    }

    // == pivot
    for(let i=0; i<n; i++) {
        if(nums[i] === pivot) {
            result[index++] = nums[i];
        }
    }

    // > pivot
    for(let i=0; i<n; i++) {
        if(nums[i] > pivot) {
            result[index++] = nums[i];
        }
    }

    return result;
};

// Time Complexity:- O(N)
// Space Complexity:- O(N)