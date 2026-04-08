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
        const sortedMeetingTimes = intervals.sort((a, b) => a.start - b.start)     
        const res = []
        console.log({sortedMeetingTimes})
        while (sortedMeetingTimes.length) {
            let bucket = []
            bucket.push(sortedMeetingTimes.shift())
            let i = 0

            while (i < sortedMeetingTimes.length) {
                let next = sortedMeetingTimes[i]

                if (next.start >= bucket[bucket.length - 1].end) {
                    // no conflict, add this interval to the bucket
                    const spliced = sortedMeetingTimes.splice(i, 1)
                    console.log({i, spliced})
                    bucket.push(spliced[0])
                } else {
                    i++
                }
                // this interval is a conflict, move on to the next
            }
            res.push(bucket)
            console.log({bucket})
        }
    


        return res.length
    }
}

// sort intervals by beginning time ascended
// while sortedMeetingTimes has items, 