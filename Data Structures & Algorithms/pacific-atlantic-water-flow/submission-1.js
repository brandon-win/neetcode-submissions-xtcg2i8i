class Solution {
    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */
    pacificAtlantic(heights) {
        const ROWLEN = heights.length
        const COLLEN = heights[0].length
        const pacificQueue = []
        const atlanticQueue = []
        const pacificSet = new Set()
        const atlanticSet = new Set()

        for (let row = 0; row < ROWLEN; row++) {
            for (let col = 0; col < COLLEN; col++) {
                if (row === 0 || col === 0) {
                    pacificQueue.push([row, col])
                    pacificSet.add(`${row}-${col}`)
                }

                if (row === ROWLEN - 1 || col === COLLEN - 1) {
                    atlanticQueue.push([row, col])
                    atlanticSet.add(`${row}-${col}`)

                }
            }
        }


        const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]]
        const bfs = (queue, set, heights) => {
            while (queue.length) {
                const queueLen = queue.length

                for (let i = 0; i < queueLen; i++) {
                    const [currRow, currCol] = queue.shift()

                    for (const [dr, dc] of directions) {
                        const newRow = currRow + dr
                        const newCol = currCol + dc

                        if (
                            newRow >= 0 &&
                            newRow < ROWLEN && 
                            newCol >= 0 &&
                            newCol < COLLEN &&
                            !set.has(`${newRow}-${newCol}`) &&
                            heights[newRow][newCol] >= heights[currRow][currCol]
                        )  {
                            queue.push([newRow, newCol])
                            set.add(`${newRow}-${newCol}`)
                        }
                    }
                }
            }
        }


        bfs(atlanticQueue, atlanticSet, heights)
        bfs(pacificQueue, pacificSet, heights)

        let res = []
        atlanticSet.forEach((coord) => {
            if (pacificSet.has(coord)) {
                const [row, col] = coord.split('-')
                res.push([Number(row), Number(col)])
            }
        })

        return res
    }
}

// approach
// create 2 queues 
// create 2 sets
// add appropriate cells to queues and sets
// do bfs on each queue 
// iterate through one set to compare with the other to create res array