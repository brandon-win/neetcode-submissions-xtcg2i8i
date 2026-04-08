class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let max = 0
        let left = 0
        const strSet = new Set()  

        for (let right = 0; right < s.length; right++) {
            while (strSet.has(s[right])) {
                strSet.delete(s[left])
                left++
            }

            strSet.add(s[right])
            max = Math.max(strSet.size, max)
        }

        return max
    }
}

// approach

// use sliding window with a hashset to figure if a current string length does
// NOT have repeating characters
// at the end of each loop iteration, check curr currMax with totalMax

