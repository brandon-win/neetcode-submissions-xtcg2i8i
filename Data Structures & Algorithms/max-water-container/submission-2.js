class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let maxVol = 0 
        let left = 0
        let right = heights.length - 1
        
        while (left < right) {
            const currVol = Math.min(heights[left], heights[right]) * (right - left)
            maxVol = Math.max(maxVol, currVol) 
            if (heights[left] > heights[right]) {
                right--
            } else {
                left++
            }
        }

        return maxVol
    }
}

// approach 
// two pointer approach
// initialize max water variable, left var starting at 0 and right var starting at end of arr
// get the curr vol and compare to max vol
// check which side has a lower wall, whichever one is lower inc (or dec)
// do this until left and right === each other
// return max water 