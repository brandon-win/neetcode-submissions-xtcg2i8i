class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map = {}
        for (let i = 0; i < nums.length; i++) {
            if (map[nums[i]] === undefined) {
                map[nums[i]] = 0
            }
            map[nums[i]]++
        } // n

        const topKEntries = Object.entries(map).sort((a, b) => a[1] - b[1]).slice(-k) // nlogn
        return topKEntries.map((e) => e[0]) // n
    }

    // time O(nlogn)
    // space O(n)
}

// approach
// create a map 
// add numbers to the map as the key and increment frequency as the value
// return entries and sort by frequency, slicing the top k entries
// return res array of the keys of the top k 

// approach 2 (max heap)
// implement heap data structure (with array) 
// create map
// add all numbers(key) and freq(value)
// list out entries and heapify 
// return top k elements from heap (slice from first k elements)
