// https://leetcode.com/problems/longest-nice-subarray/

// The key operations are:

// 1.) bitMask & nums[right] != 0: Checks if the current number shares any bits with our window
// 2.) bitMask ^= nums[left]: Removes the leftmost element's bits from our tracking
// 3.) bitMask |= nums[right]: Adds the current element's bits to our tracking

var longestNiceSubarray = function (nums) {
  let left = 0;
  let maxLen = 0;
  let bitMask = 0;
  let n = nums.length;

  for (let right = 0; right < n; right++) {
    while ((bitMask & nums[right]) != 0) {
      bitMask = bitMask ^ nums[left];
      left++;
    }

    bitMask = bitMask | nums[right];
    maxLen = Math.max(maxLen, right - left + 1);
  }

  return maxLen;
};

// Time complexity: O(n)
// Space complexity: O(1)
