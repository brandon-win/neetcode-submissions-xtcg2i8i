class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const map1 = new Array(26).fill(0)
        const map2 = new Array(26).fill(0)
        const aAnchor = 'a'.charCodeAt()

        for (let i = 0; i < s.length; i++) {
            map1[s[i].charCodeAt() - aAnchor]++
        }

        for (let j = 0; j < t.length; j++) {
            map2[t[j].charCodeAt() - aAnchor]++
        }

        return JSON.stringify(map1) === JSON.stringify(map2)
    }
}
