class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let left = 0
        let right = s.length - 1
        const reg = new RegExp(/^[a-zA-Z0-9]/)

        while (left <= right) {
            while (left < right && !reg.test(s[left])) {
                left++
            }

            while (right > left && !reg.test(s[right])) {
                right--
            }

            if (s[left].toLowerCase() !== s[right].toLowerCase()) {
                return false
            }

            left++
            right-- 
        }

        return true
    }
}
