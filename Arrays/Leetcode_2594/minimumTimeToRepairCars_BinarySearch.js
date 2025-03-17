// https://leetcode.com/problems/minimum-time-to-repair-cars/description/

function repairCars(ranks, cars) {
  let left = Math.min(...ranks);
  let right = Math.max(...ranks) * cars * cars;
  let ans = 0;

  while (left <= right) {
    let mid = Math.floor(left + (right - left) / 2);
    if (isCarsRepaired(mid, ranks, cars)) {
      ans = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return ans;
}

function isCarsRepaired(time, ranks, carsToBeRepaired) {
  let carsRepaired = 0;
  for (let rank of ranks) {
    carsRepaired += Math.floor(Math.sqrt(time / rank));
    if (carsRepaired >= carsToBeRepaired) return true;
  }
  return false;
}

// Time Complexity: O(N log(maxRank * cars²))
// Space Complexity: O(1)
