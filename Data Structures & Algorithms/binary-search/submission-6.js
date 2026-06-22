class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let left = 0
        let right = nums.length - 1

        while (left <= right) {
            let mid = Math.round((left + right) / 2) 

            if (nums[mid] > target) {
                // look left 
                right = mid - 1
            } else if (nums[mid] < target) {
                // look right
                left = mid + 1
            } else {
                return mid
            }
        }
        // fallthrough case if index doesn't exist. 
        return -1
    }
}
