class Solution {
    /**
     * @param {string} s
     * @return {string[][]}
     */
    partition(s) {
        const res = []
        const subArr = []
        const solns = new Set()

        const dfs = (index) => {
            if (index >= s.length) {
                res.push([...subArr])
                return
            }

            for (let curr = index; curr < s.length; curr++) {
                let currString = s.substring(index, curr + 1)
                if (this.isPalindrome(currString)) {
                    subArr.push(currString)
                    dfs(curr + 1)
                    subArr.pop()
                }
            }

        }
        dfs(0)
        return res
    }

    isPalindrome(string) {
        if (string.length === 0) {
            return false
        }

        let first = 0
        let last = string.length - 1

        while (first <= last) {
            if (string[first] !== string[last]) {
                return false
            } 

            first++
            last--
        }

        return true
    }
}

// approach
// decision tree: 
//   dfs on string addition
//   dfs on current string