/**
 * https://leetcode.com/problems/count-square-submatrices-with-all-ones/
 *
 * Given a m * n matrix of ones and zeros,
 * return how many square submatrices have all ones.
 */

export function countSquares(matrix: number[][]): number {
  let count = 0
  let n = matrix.length
  let m = matrix[0].length
  let dp = new Array(n)
  for (let i = 0; i < n; i++) dp[i] = new Array(m).fill(0)

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (i == 0 || j == 0) {
        dp[i][j] = matrix[i][j]
      } else {
        if (matrix[i][j] == 1) {
          const x = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1
          dp[i][j] = x
        }
      }
      count += dp[i][j]
    }
  }

  return count
}
