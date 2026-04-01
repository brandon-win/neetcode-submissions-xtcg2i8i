class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @param {number[][]} queries
     * @return {boolean[]}
     */
    checkIfPrerequisite(numCourses, prerequisites, queries) {
   const adj = Array.from({ length: numCourses }, () => []);
    const inDegree = new Array(numCourses).fill(0);
    const prereqSets = Array.from({ length: numCourses }, () => new Set());

    // 1. Build the graph
    // Input is [prereq, course]
    for (const [pre, crs] of prerequisites) {
        adj[pre].push(crs);
        inDegree[crs]++;
    }

    // 2. Initialize Queue with nodes that have no prerequisites
    const queue = [];
    for (let i = 0; i < numCourses; i++) {
        if (inDegree[i] === 0) queue.push(i);
    }

    // 3. Process the graph topologically
    while (queue.length > 0) {
        const u = queue.shift();

        for (const v of adj[u]) {
            // Course 'u' is a direct prerequisite of 'v'
            prereqSets[v].add(u);
            
            // Everything that was a prereq for 'u' is also a prereq for 'v'
            for (const ancestor of prereqSets[u]) {
                prereqSets[v].add(ancestor);
            }

            inDegree[v]--;
            if (inDegree[v] === 0) queue.push(v);
        }
    }

    // 4. Answer queries in O(1)
    return queries.map(([pre, crs]) => prereqSets[crs].has(pre));
    }
}

// approach

// use topological sort to understand the ordering of the courses


// for node clusters what if they come before certain nodes in a bigger cluster? 
// separate things into different clusters? use dfs each query to ensure it's correct? 

// super slow to use dfs on every course how do we not iterate over the same node repeatedly? 