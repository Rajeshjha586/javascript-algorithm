// https://leetcode.com/problems/partition-array-according-to-given-pivot/description/

var pivotArray = function(nums, pivot) {
    let result = new Array(nums.length).fill(0);
    let n = nums.length;
    let left = 0;
    let right = n - 1;
    
    for (let i = left, j =right; i < n; i++, j--) {
        if (nums[i] < pivot) {
            result[left] = nums[i];
            left++;
        }
        
        if (nums[j] > pivot) {
            result[right] = nums[j];
            right--;
        }
    }
    
    while (left <= right) {
        result[left] = pivot;
        left++;
    }
    
    return result;
};

// Time Complexity:- O(N)
// Space Complexity:- O(N)
