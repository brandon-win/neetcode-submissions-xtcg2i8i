class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        const set = new Set()
        let longestSubstring = 0
        let left = 0

        for (let right = 0; right < s.length; right++) {
            while (set.has(s[right])) {
                set.delete(s[left])
                left++
            }   

            set.add(s[right])
            longestSubstring = Math.max(longestSubstring, set.size)
        }

        return longestSubstring
    }
}

// approach
// use hashset to recognize what characters we already have 
// we can init a var to track max string length
// use two pointers 

