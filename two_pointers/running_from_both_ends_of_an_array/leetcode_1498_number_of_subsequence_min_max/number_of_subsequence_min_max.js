// https://leetcode.com/problems/number-of-subsequences-that-satisfy-the-given-sum-condition/

var numSubseq = function (nums, target) {
  const MOD = 1000000007;
  nums.sort((a, b) => a - b);

  const pows = new Array(nums.length).fill(1);
  for (let i = 1; i < nums.length; i++) {
    pows[i] = (pows[i - 1] * 2) % MOD;
  }

  let left = 0;
  let right = nums.length - 1;
  let ans = 0;

  while (left <= right) {
    if (nums[left] + nums[right] <= target) {
      ans = (ans + pows[right - left]) % MOD;
      left++;
    } else {
      right--;
    }
  }
  return ans;
};

// Time complexity :- O(NlogN)
// Space complexity :- O(N)
