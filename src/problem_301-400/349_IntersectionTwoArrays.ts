/**
 * https://leetcode.com/problems/intersection-of-two-arrays/
 *
 * Given two integer arrays nums1 and nums2,
 * return an array of their intersection.
 * Each element in the result must be unique and you may return the result in any order.
 *
 */

export function intersection(nums1: number[], nums2: number[]): number[] {
  const set = new Set()
  const res = new Set<number>()
  nums1.forEach((num) => set.add(num))
  nums2.forEach((num) => {
    if (set.has(num)) res.add(num)
  })

  return [...res]
}
