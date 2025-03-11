// https://leetcode.com/problems/number-of-substrings-containing-all-three-characters/
var numberOfSubstrings = function(s) {
    let count = 0;
    
    for (let i = 0; i < s.length; i++) {
        let hash = Array(3).fill(0);

        for (let j = i; j < s.length; j++) {
            hash[s[j].charCodeAt(0) - 'a'.charCodeAt(0)] = 1;
            
            if (hash[0] + hash[1] + hash[2] === 3) {
                count = count + (s.length - j);
                break;
            }
        }
    }

    return count;
};

// Time Complexity : O(N2) -> Time Limit Exceed for long String
// Space Complexity:- O(1)
