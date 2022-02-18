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
  if (k < n) return []
  if (k == n) {
    return [[...Array(k).keys()].map((v) => 1)]
  }
  return [[1]]
}
