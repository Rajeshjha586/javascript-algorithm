// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/

var maxProfit = function(prices) {
    let profit = 0;
    let minimum = prices[0];

    for(let i=1; i<prices.length; i++) {
        let cost = prices[i] - minimum;
        profit = Math.max(profit, cost);
        minimum = Math.min(minimum, prices[i]);
    }
    return profit;
};

// Time Complexity: O(N)
// Space Complexity: O(1)
