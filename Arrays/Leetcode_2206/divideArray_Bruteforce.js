// https://leetcode.com/problems/divide-array-into-equal-pairs/description

var divideArray = function (nums) {
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i += 2) {
    if (nums[i] !== nums[i + 1]) return false;
  }
  return true;
};

// Time Complexity:- O(NlogN) → Sorting takes O(NlogN), and checking pairs takes O(N).
// Space Complexity:- O(1)
