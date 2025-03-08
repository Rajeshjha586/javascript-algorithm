var minimumRecolors = function(blocks, k) {
    let n = blocks.length;
    let whiteColor = 0;

    for(let i = 0; i < k; i++) {
        if(blocks[i] === 'W') {
            whiteColor++;
        }
    }

    let result = whiteColor;

    for(let i = 1; i < (n - k + 1); i++) {
        if(blocks[i - 1] === 'W') {
            whiteColor--;
        }

        if(blocks[i + k - 1] === 'W') {
            whiteColor++;
        }

        console.log(result, whiteColor)

        result = Math.min(result, whiteColor);
    }

    return result;
};

// Time Complexity : O(K + N - K + 1) => O(N + 1) => O(N)
// Space Complexity: O(1)