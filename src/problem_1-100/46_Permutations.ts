/**
 * https://leetcode.com/problems/permutations/
 *
 * Given an array nums of distinct integers,
 * return all the possible permutations. You can return the answer in any order.
 */

export function permute(nums: number[]): number[][] {
  const result: number[][] = []

  if (nums.length === 0) return result

  function backTrack(current: number[], rest: number[]): void {
    if (rest.length === 0) {
      result.push(current)
      return
    }
    for (let i = 0; i < rest.length; i++) {
      backTrack(
        [...current, rest[i]],
        [...rest.slice(0, i), ...rest.slice(i + 1)]
      )
    }
  }

  backTrack([], nums)
  return result
}
