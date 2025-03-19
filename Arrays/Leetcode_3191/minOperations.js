// https://leetcode.com/problems/minimum-operations-to-make-binary-array-elements-equal-to-one-i

var minOperations = function (nums) {
  let n = nums.length;
  let count = 0;
  for (let i = 0; i < n - 2; i++) {
    if (nums[i] === 0) {
      nums[i] = 1 - nums[i];
      nums[i + 1] = 1 - nums[i + 1];
      nums[i + 2] = 1 - nums[i + 2];
      count++;
    }
  }

  if (nums[n - 1] === 0 || nums[n - 2] === 0) {
    return -1;
  }

  return count;
};

// Time Complexity:- O(N)
// Space Complexity:- O(1)
