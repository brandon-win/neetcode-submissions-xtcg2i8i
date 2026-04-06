class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        const res = []
        const subsoln = []

        const dfs = (index) => {
            if (index >= nums.length) {
                res.push([...subsoln])
                return
            }


            subsoln.push(nums[index])
            dfs(index + 1)

            subsoln.pop()
            dfs(index + 1)
        }

        dfs(0)
        return res
    }
}
