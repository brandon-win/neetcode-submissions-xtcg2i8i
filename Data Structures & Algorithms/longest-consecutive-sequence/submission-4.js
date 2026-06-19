class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let globalCounter = 0 

        const set = new Set(nums)
        
        for (let i = 0; i < nums.length; i++) {
            let currNum = nums[i]
            if (!set.has(currNum - 1)) {
                let currCounter = 0
                while (set.has(currNum)) {
                    currCounter++
                    currNum++ 
                }

                globalCounter = Math.max(globalCounter, currCounter)
            }
        }


        return globalCounter
    }
}

// approach
// we can add all the numbers to a hashset 
// iterate the input array if the number before it doesn't exist, it's the beginning of a 
// line. 

// keep incrementing the curr num and checking the hashset (also incrementing global counter)

// return global counter