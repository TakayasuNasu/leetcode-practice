/**
 * https://leetcode.com/problems/majority-element/
 *
 * Given an array nums of size n, return the majority element.
 * The majority element is the element that appears more than ⌊n / 2⌋ times.
 * You may assume that the majority element always exists in the array.
 */

export function majorityElement(nums: number[]): number {
  const m = new Map<number, number>()
  for (let i = 0; i < nums.length; i++) {
    const v = m.get(nums[i]) ?? 0
    m.set(nums[i], v + 1)
  }
  let result = 0
  let max = 0
  m.forEach((v, k) => {
    if (max < v) {
      result = k
      max = v
    }
  })
  return result
}
