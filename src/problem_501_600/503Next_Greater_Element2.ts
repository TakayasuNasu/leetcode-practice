/**
 * https://leetcode.com/problems/next-greater-element-ii/
 *
 * Given a circular integer array nums (i.e., the next element of nums[nums.length - 1] is nums[0]),
 * return the next greater number for every element in nums.
 *
 * The next greater number of a number x is the first greater number to its traversing-order next in the array,
 * which means you could search circularly to find its next greater number.
 * If it doesn't exist, return -1 for this number.
 */

export function nextGreaterElements(nums: number[]): number[] {
  const result: number[] = []

  for (let count = 0; count < 2; count++) {
    for (let i = 0; i < nums.length; i++) {
      if (count == 0) {
      }
    }
  }
  return result
}
