class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let currProduct = 1
        const prefix = nums.map((num => {
            currProduct = currProduct * num
            return currProduct
        })) 

        const suffix = new Array(nums.length).fill(0)
        currProduct = 1
        for (let j = nums.length - 1; j >= 0; j--) {
            currProduct = currProduct * nums[j]
            suffix[j] = currProduct
        }

        console.log({prefix, suffix})

        const res = []

        for (let k = 0; k < nums.length; k++) {
            res[k] = (prefix[k - 1] ?? 1) * (suffix[k + 1] ?? 1)
        }

        return res
    }
}

// approach
// prefix product array
// we iterate forward and backward getting the products of everything 
//

