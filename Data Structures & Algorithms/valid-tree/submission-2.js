class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n, edges) {
        if (edges.length > n - 1) {
            return false
        }

        const adjList = new Map()

        for (let i = 0; i < n; i++) {
            adjList.set(i, [])
        }

        for (let [src, dst] of edges) {
            adjList.get(src).push(dst)
            adjList.get(dst).push(src)
        }

        const visited = new Set()

        const traverseGraph = (node, parent) => {
            if (visited.has(node)) {
                return false
            }

            visited.add(node)
            const nodeNeighbors = adjList.get(node)

            for (let n of nodeNeighbors) {
                if (n === parent) {
                    continue;
                }

                if (!traverseGraph(n, node)) {
                    return false
                }
            }

            return true
        }

        return traverseGraph(0, -1) && visited.size === n

    }
}


// approach
// use topological sort to check for any cycles in the "graph"
// create adjacency list 
// we can use 2 sets (one for visited the other for checking active path) 
// from the topologically sorted array, we can then dfs the tree to see if all nodes exist in tree
