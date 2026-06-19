class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = {}
        const aAnchor = 'a'.charCodeAt()

        for (let i = 0; i < strs.length; i++) {
            const wordMap = new Array(26).fill(0)
            const currWord = strs[i]

            for (let j = 0; j < currWord.length; j++) {
                wordMap[currWord[j].charCodeAt() - aAnchor]++
            }

            const strWordMap = JSON.stringify(wordMap)

            if (map[strWordMap] === undefined) {
                map[strWordMap] = []
            }

            map[strWordMap].push(currWord)
        }

        const res = []
        for (const key in map) {
            res.push(map[key])
        }

        return res
    }
}

// approach
// create a map 
// create anchor to 'a' string