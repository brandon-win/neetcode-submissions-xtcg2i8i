class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const map = {}

        for (let i = 0; i < nums.length; i++) {
            const complement = target - nums[i]

            if (map[complement] !== undefined) {
                return [map[complement], i]
            }

            map[nums[i]] = i
        }

        return [null, null] // unreachable
    }
}

// approach 
// Use hash map to add complements as key and index as value
// if a complement of another number exists return the current index you are one and map[complement]