/**
 * https://leetcode.com/problems/combination-sum-iii/
 *
 * Find all valid combinations of k numbers that sum up to n such that the following conditions are true:
 *
 * - Only numbers 1 through 9 are used.
 * - Each number is used at most once.
 * Return a list of all possible valid combinations.
 * The list must not contain the same combination twice, and the combinations may be returned in any order.
 */

export function combinationSum3(k: number, n: number): number[][] {
  const nums = [...Array(9).keys()].map((i) => i + 1)
  const result: number[][] = []

  const helper = (
    container: number[] = [],
    sum: number = 0,
    index: number = 0
  ) => {
    if (sum == n && container.length == k) {
      result.push(container)
    }
    if (sum < n && container.length < k) {
      for (let i = index; i < 9; i++) {
        helper([...container, nums[i]], sum + nums[i], i + 1)
      }
    }
  }

  helper()

  return result
}
