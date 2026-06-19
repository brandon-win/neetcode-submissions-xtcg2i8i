class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let res = ''

        for (const word of strs) {
            const len = word.length
            res += `&${len}&${word}`
        }
        console.log('encode res', res)
        return res
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let index = 0
        let res = []
        while (index < str.length) {
            let num = ''
            if (str[index] === `&`) {
                index++
                while (str[index] !== '&') {
                    num += str[index]
                    index++
                }
                const firstWordIndex = index + 1
                const lastWordIndex = index + 1 + Number(num)
                res.push(str.substring(firstWordIndex, lastWordIndex))
                index = lastWordIndex
            }
        }

        return res  
    }
}
