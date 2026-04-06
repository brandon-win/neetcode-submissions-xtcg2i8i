class Solution {
    /**
     * @param {string} s
     * @return {string[][]}
     */
    partition(s) {
        const res = []
        const subsoln = []

        const dfs = (i) => {
            if (i >= s.length) {
                res.push([...subsoln])
                return
            }

            for (let j = i; j < s.length; j++) {
                let currString = s.substring(i, j + 1)

                if (this.isPalindrome(currString)) {
                    subsoln.push(currString)
                    dfs(j + 1)
                    subsoln.pop()
                }
            }
        }

        dfs(0)
        return res
    }

    isPalindrome(str) {
        let first = 0
        let last = str.length - 1

        while (first <= last) {
            if (str[first] !== str[last]) {
                return false
            }

            first++
            last--
        }

        return true
    }
}
