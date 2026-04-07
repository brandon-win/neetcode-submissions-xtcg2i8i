class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        nums = nums.sort((a, b) => a - b)
        const res = []

        console.log({nums})
        const dfs = (i, subSolnArr, runningTotal) => {
            if (runningTotal >= target) {
                if (runningTotal === target) {
                    res.push(subSolnArr)
                }
                return
            }

            for (let j = i; j < nums.length; j++) {
                subSolnArr.push(nums[j])
                runningTotal += nums[j]
                dfs(j, subSolnArr.slice(), runningTotal)
                subSolnArr.pop()
                runningTotal -= nums[j]
            }
        }

        dfs(0, [], 0)
        return res
    }
}

// approach 
// use dfs to run through all combinations of entities in nums

