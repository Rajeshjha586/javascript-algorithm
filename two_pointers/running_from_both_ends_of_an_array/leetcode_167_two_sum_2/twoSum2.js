// https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/description/

var twoSum = function (numbers, target) {
  let left = 0;
  let right = numbers.length - 1;

  while (left < right) {
    let sum = numbers[left] + numbers[right];

    if (sum === target) {
      return [left + 1, right + 1];
    } else if (sum > target) {
      //Move Right pointer left to reduce sum
      right--;
    } else {
      // Move left pointer right to increase sum
      left++;
    }
  }
};

// const twoSum = function (numbers, target) {
//   let left = 0;
//   let right = numbers.length - 1;

//   while (numbers[left] + numbers[right] !== target) {
//     if (numbers[left] + numbers[right] > target) {
//       right--;
//     } else {
//       left++;
//     }
//   }

//   return [left + 1, right + 1];
// };

// Time Complexity:- O(N)
// Space Complexity: O(1)
