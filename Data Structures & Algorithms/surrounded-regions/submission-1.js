class Solution {
    /**
     * @param {character[][]} board
     * @return {void} Do not return anything, modify board in-place instead.
     */
    solve(board) {
        const set = Array.from({ length: board.length }, () => Array(board[0].length).fill(null))
        const queue = []

        // Check for O's along border
        for (let row = 0; row < board.length; row++) {
            for (let col = 0; col < board[0].length; col++) {
                if (
                    (row === 0 || 
                    row === board.length - 1 || 
                    col === 0 || 
                    col === board[0].length - 1) &&
                    board[row][col] === "O" 
                ) {
                    queue.push([row, col])
                    set[row][col] = true
                }
            }
        }

        const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]]
        while (queue.length) {
            const qLen = queue.length
            for (let i = 0; i < qLen; i++) {
                const [currRow, currCol] = queue.shift()
                for (let [dr, dc] of directions) {
                    const nr = currRow + dr
                    const nc = currCol + dc

                    if (
                        nr >= 0 &&
                        nr <= board.length -1 &&
                        nc >= 0 && 
                        nc <= board[0].length - 1 &&
                        board[nr][nc] === 'O' && 
                        !set[nr][nc]
                    ) {
                        queue.push([nr, nc])
                        set[nr][nc] = true
                    }
                }
            }
        }

        for (let row = 0; row < board.length; row++) {
            for (let col = 0; col < board[0].length; col++) {
                if (!set[row][col] && board[row][col] === 'O') {
                    board[row][col] = 'X'
                }
            }
        }

        console.log({set, board})
    }
}


// approach
// find an island
// check the edges of the grid, all O's are added to a queue
// use BFS to mark these points as invalid (not surrounded)
// add these points to a set

// then look through grid again and whichever spot is not part of set, set to X

