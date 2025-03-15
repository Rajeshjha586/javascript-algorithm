// https://leetcode.com/problems/house-robber-iv/description/?envType=daily-question&envId=2025-03-15

function minCapability(nums, k) {
  let left = Infinity;
  let right = -Infinity;

  for (let num of nums) {
    if (num < left) left = num;
    if (num > right) right = num;
  }
  let ans = 0;

  while (left <= right) {
    let mid = Math.floor(left + (right - left) / 2);
    if (isRobberyPossible(mid, nums, k)) {
      ans = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return ans;
}

function isRobberyPossible(capability, nums, minHouses) {
  let housesRobbed = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] <= capability) {
      housesRobbed++;
      i++; // Skip the next house due to adjacency condition
    }
    if (housesRobbed >= minHouses) return true;
  }

  return false;
}

// Time Complexity:- O(N * log(max(nums)−min(nums)))
// Space Complexity:- O(1)
