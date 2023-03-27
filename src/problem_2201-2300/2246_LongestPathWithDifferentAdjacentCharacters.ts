export function longestPath(parent: number[], s: string): number {
  const graph = parent.reduce(
    (adjList, parent, node) => {
      if (parent < 0) return adjList
      adjList[parent].push(node)
      return adjList
    },
    new Array(parent.length).fill(0).map<number[]>(() => [])
  )

  let maxLength: number = 1

  const dfs = (node: number) => {
    let l1 = 0,
      l2 = 0

    for (let neighbor of graph[node]) {
      const length = dfs(neighbor)

      if (s[neighbor] !== s[node]) {
        if (length > l1) {
          l2 = l1
          l1 = length
        } else if (length > l2) {
          l2 = length
        }
      }
    }

    maxLength = Math.max(maxLength, l1 + l2 + 1)
    return l1 + 1
  }

  dfs(0)

  return maxLength
}
