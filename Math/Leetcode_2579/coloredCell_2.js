// https://leetcode.com/problems/count-total-number-of-colored-cells

var coloredCells = function(n) {
    return 1 + n * (n-1) * 2;
};