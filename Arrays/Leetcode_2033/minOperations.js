// https://leetcode.com/problems/minimum-operations-to-make-a-uni-value-grid/description

var minOperations = function (grid, x) {
  let flattened = grid.flat();

  // Check if all elements have the same remainder when divided by x
  let remainder = flattened[0] % x;
  if (!flattened.every((num) => num % x === remainder)) return -1;

  // Sort to find the median
  flattened.sort((a, b) => a - b);
  let median = flattened[Math.floor(flattened.length / 2)];

  // Calculate total operations
  return flattened.reduce(
    (operations, num) => operations + Math.abs(num - median) / x,
    0
  );
};

// Time Complexity:O(m⋅nlog(m⋅n))
// Space Complexity: O(m * n)
