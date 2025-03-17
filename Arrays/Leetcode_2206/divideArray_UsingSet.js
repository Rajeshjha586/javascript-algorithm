// https://leetcode.com/problems/divide-array-into-equal-pairs/description

function divideArray(nums) {
  const set = new Set();
  for (const num of nums) {
    if (set.has(num)) {
      set.delete(num);
    } else {
      set.add(num);
    }
  }
  return set.size === 0;
}

// Time Complexity:- O(N)
// Space Complexity:- O(N)
