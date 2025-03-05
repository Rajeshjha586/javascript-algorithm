// https://leetcode.com/problems/count-total-number-of-colored-cells

var coloredCells = function(n) {
    let ans = 1;

    while(--n) {
        ans += 4 * n;
    }

    return ans;
};