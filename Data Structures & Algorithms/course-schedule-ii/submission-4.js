class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {number[]}
     */
    findOrder(numCourses, prerequisites) {
        const adjList = new Map()

        for (let i = 0; i < numCourses; i++) {
            adjList.set(i, [])
        }

        for (let [crs, prereq] of prerequisites) {
            adjList.get(crs).push(prereq)
        }

        const res = []
        const visited = new Set()
        const path = new Set()

        const dfs = (crs, validCourses, visited, cycle) => {
            if (cycle.has(crs)) {
                return false
            }

            if (visited.has(crs)) {
                return true
            }

            visited.add(crs)
            cycle.add(crs)

            const crsPrereqs = adjList.get(crs)
            for (let req of crsPrereqs) {
                if (!dfs(req, validCourses, visited, cycle)) {
                    return false
                }
            }   
            validCourses.push(crs)
            cycle.delete(crs)
            return true
        }

        for (let j = 0; j < numCourses; j++) {
            if (!dfs(j, res, visited, path)) {
                return []
            }
        }

        return res

    }
}
