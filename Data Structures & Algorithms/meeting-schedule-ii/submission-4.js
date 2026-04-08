/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {number}
     */
    minMeetingRooms(intervals) {
        const startSort = intervals.sort((a, b) => a.start - b.start).map((i) => i.start)
        const endSort = intervals.sort((a, b) => a.end - b.end).map((i) => i.end)

        console.log({startSort, endSort})

        let max = 0
        let curr = 0
        let start = 0
        let end = 0

        while (start < intervals.length) {
            if (startSort[start] < endSort[end]) {
                start++
                curr++
            } else {
                end++
                curr--
            }

            max = Math.max(max, curr)
        }

        return max
    }
}
