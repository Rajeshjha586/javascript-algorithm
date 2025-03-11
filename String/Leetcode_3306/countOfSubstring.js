// https://leetcode.com/problems/count-of-substrings-containing-every-vowel-and-k-consonants-ii/description/

var countOfSubstrings = function(word, k) {
    function isConsonant(ch) {
        return ch !== 'a' && ch !== 'e' && ch !== 'i' && ch !== 'o' && ch !== 'u';
    }

    function isAllVowelsPresent(freq) {
        return freq['a'.charCodeAt(0) - 'a'.charCodeAt(0)] > 0 &&
            freq['e'.charCodeAt(0) - 'a'.charCodeAt(0)] > 0 &&
            freq['i'.charCodeAt(0) - 'a'.charCodeAt(0)] > 0 &&
            freq['o'.charCodeAt(0) - 'a'.charCodeAt(0)] > 0 &&
            freq['u'.charCodeAt(0) - 'a'.charCodeAt(0)] > 0;
    }

    function atleast(k, word) {
        let count = 0;
        let consonantCount = 0;
        let left = 0;
        let freq = Array(26).fill(0);
        let n = word.length;

        for (let right = 0; right < n; right++) {
            let ch = word[right];
            if (isConsonant(ch)) consonantCount++;

            freq[ch.charCodeAt(0) - 97]++;

            while (consonantCount >= k && isAllVowelsPresent(freq)) {
                count += (n - right);
                let leftChar = word[left];
                if (isConsonant(leftChar)) consonantCount--;
                freq[leftChar.charCodeAt(0) - 97]--;
                left++;
            }
        }
        return count;
    }

    return atleast(k, word) - atleast(k + 1, word);
};
