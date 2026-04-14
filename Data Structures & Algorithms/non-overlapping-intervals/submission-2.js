class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number}
     */
    eraseOverlapIntervals(intervals) {
        intervals.sort((a, b) => a[1] - b[1])

        let currentEnd = intervals[0][1]
        let intervalsToKeep = 1
        
        for (let i = 0 ; i < intervals.length; i++) {
            let currentStart = intervals[i][0]
            if (currentStart >= currentEnd) {
                intervalsToKeep++
                currentEnd = intervals[i][1]
            }
        }

        return intervals.length - intervalsToKeep
    }
}

// approach 
// sort by end times

// keep track of currentEnd initialized to the first 
// keep track of how many intervals to keep (intervals to keep)

// iterate through intervals 
    // currentstart is intervals[i][0]
// if current start is greater or equal than the current end
   // uptick intervalsToKeep



// return intervals.length - intervalsTokeep