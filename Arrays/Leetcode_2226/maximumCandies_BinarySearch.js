//https://leetcode.com/problems/maximum-candies-allocated-to-k-children/description/?envType=daily-question&envId=2025-03-14

var maximumCandies = function(candies, k) {
    let totalCandies = candies.reduce((sum, count) => sum + count, 0);
    
    if (totalCandies < k) return 0; 

    let minCandies = 1;
    let maxCandies = Math.floor(totalCandies / k) + 1;

    while (minCandies < maxCandies) {
        let candiesPerChild = Math.floor((minCandies + maxCandies) / 2);

        if (candiesPerChild === 0) return 0;

        let childrenServed = candies.reduce((count, pile) => count + Math.floor(pile / candiesPerChild), 0);

        if (childrenServed >= k) {
            minCandies = candiesPerChild + 1;
        } else {
            maxCandies = candiesPerChild;
        }
    }

    return minCandies - 1;
};

// Time Complexity:- O(N * logK)
// Space Complexity:- O(1)