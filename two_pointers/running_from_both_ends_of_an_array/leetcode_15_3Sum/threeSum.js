// https://leetcode.com/problems/3sum/description/

var threeSum = function (nums) {
  nums.sort((a, b) => a - b);

  let result = [];
  let target = 0;
  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let left = i + 1;
    let right = nums.length - 1;
    let newTarget = target - nums[i];

    while (left < right) {
      let sum = nums[left] + nums[right];

      if (sum < newTarget) {
        left++;
      } else if (sum > newTarget) {
        right--;
      } else {
        result.push([nums[i], nums[left], nums[right]]);
        left++;
        right--;

        while (left < right && nums[left] === nums[left - 1]) {
          left++;
        }

        while (left < right && nums[right] === nums[right + 1]) {
          right--;
        }
      }
    }
  }

  return result;
};

// Time Complexity:- O(NlogN + N2)
// Space Complexity: O(1)

// var getHash = function (x, y, z) {
//   let hash = x;
//   hash *= 100000;
//   hash += y;
//   hash *= 100000;
//   hash += z;

//   return hash;
// };

// var threeSum = function (nums) {
//   nums.sort((a, b) => a - b);

//   let result = [];

//   let target = 0;
//   const set = new Set();

//   for (let i = 0; i < nums.length; i++) {
//     let newTarget = target - nums[i];
//     let left = i + 1;
//     let right = nums.length - 1;
//     while (left < right) {
//       if (nums[left] + nums[right] < newTarget) {
//         left++;
//       } else if (nums[left] + nums[right] > newTarget) {
//         right--;
//       } else {
//         const hash = getHash(nums[i], nums[left], nums[right]);

//         if (!set.has(hash)) {
//           result.push([nums[i], nums[left], nums[right]]);
//           set.add(hash);
//         }
//         left++;
//         right--;
//       }
//     }
//   }

//   return result;
// };

// Time Complexity:- O(NlogN + N2)
// Space Complexity: O(N)
