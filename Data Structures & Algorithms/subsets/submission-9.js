class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        const res = []
        const subSolns = []

        const dfs = (n) => {
            // if n is equal or greater than nums.length stop the loop
            if (n >= nums.length) {
                res.push([...subSolns])
                return
            }


            subSolns.push(nums[n])
            dfs(n + 1)
            subSolns.pop()
            dfs(n + 1)
        }

        dfs(0)
        return res
    }
}

// approach

// use dfs

// each time we hit a number 
// we split in to 2 choices
// one where we add the current number
// one where we don't 
// dfs into both choices

