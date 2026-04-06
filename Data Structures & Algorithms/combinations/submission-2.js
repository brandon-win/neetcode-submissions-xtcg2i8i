class Solution {
    /**
     * @param {number} n
     * @param {number} k
     * @return {number[][]}
     */
    combine(n, k) {
        const res = []
        const subSoln = []

        const dfs = (i) => {
            if (subSoln.length === k) {
                res.push(subSoln.slice())
                return
            }

            if (i > n) {
                return
            } 

            for (let j = i; j <= n; j++) {
                subSoln.push(j)
                dfs(j + 1)
                subSoln.pop()
            }
        }

        dfs(1)
        return res
    }
}
