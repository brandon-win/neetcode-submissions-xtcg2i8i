class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let max = 0
        const prefixArr = []
        const suffixArr = []
        let maxLeft = height[0]
        let maxRight = height[height.length - 1]

        for (let left = 0; left < height.length; left++) {
            maxLeft = Math.max(height[left], maxLeft)
            prefixArr.push(maxLeft)
        }

        for (let right = height.length - 1; right >= 0; right--) {
            maxRight = Math.max(height[right], maxRight)
            suffixArr.unshift(maxRight)
        }

        for (let i = 0; i < height.length; i++) {
            max += Math.min(prefixArr[i], suffixArr[i]) - height[i]
        }

        return max
    }
}

// approach 

// using prefix and suffix arrays, we can get the calculation Math.min(maxL, maxR) - height[i] 
// to determine what an index can store