// https://leetcode.com/problems/maximum-count-of-positive-integer-and-negative-integer/description/

// function binarySearch(nums, left, right, target) {
//         while(left <= right) {
//             let mid = Math.floor(left + (right - left) / 2);
//             if(nums[mid] <= target) {
//                 left = mid + 1;
//             } else {
//                 right = mid - 1;
//             }
//         }

//         return left;
//     }
// var maximumCount = function(nums) {
//     let n = nums.length;
//     let end = n - 1;
//     let firstNonNegative = binarySearch(nums, 0, end, -1);
//     let negCount = firstNonNegative;
//     let firstPositive = binarySearch(nums, negCount, end, 0);
//     let posCount = (n - firstPositive);
//     return Math.max(negCount, posCount);
// };

var maximumCount = function(nums) {
    let n = nums.length;
    let firstNonNegative = binarySearch(nums, 0);
    let firstPositive = binarySearch(nums, 1);
    let negCount = firstNonNegative;
    let posCount = n - firstPositive;

    return Math.max(negCount, posCount);
};

function binarySearch(nums, val) {
    let left = 0, right = nums.length - 1;
    while (left <= right) {
        let mid = Math.floor(left + (right - left) / 2);
        if (nums[mid] < val) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return left;
}

// Time Complexity :- O(logN)
// Space Complexity:- O(1)