class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums.sort((a, b) => a - b) 
        const result = []
        const set = new Set()
        console.log({nums})
        for (let i = 0; i < nums.length - 2; i++) {
            let left = i + 1
            let right = nums.length - 1
            console.log({i, left, right})
            while (left < right) {
                let summation = nums[i] + nums[left] + nums[right]

                if (summation === 0 && !set.has(`${[nums[i], nums[left], nums[right]]}`)) {
                    result.push([nums[i], nums[left], nums[right]])
                    set.add(`${[nums[i], nums[left], nums[right]]}`)
                } else if (summation > 0) {
                    right--
                } else {
                    left++ 
                }
            }
        }

        return result
    }
}

// approach
// sort array
// iterate array
// use two pointer approach to figure out summation
// add valid tripliate to result array. 
// once we get to a valid summation stringify array and at to hash set to weed out duplicates.
// return result array