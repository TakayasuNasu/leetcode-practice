/**
 * https://leetcode.com/problems/sort-array-by-parity/
 *
 * Given an integer array nums,
 * move all the even integers at the beginning of the array
 * followed by all the odd integers.
 *
 * Return any array that satisfies this condition.
 */

export function sortArrayByParity(nums: number[]): number[] {
  for (let i: number = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
      nums.unshift(...nums.splice(i, 1))
    }
  }
  return nums
}
