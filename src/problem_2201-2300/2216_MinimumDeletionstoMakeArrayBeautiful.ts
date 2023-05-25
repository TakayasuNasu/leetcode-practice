/**
 * https://leetcode.com/problems/minimum-deletions-to-make-array-beautiful/
 *
 * You are given a 0-indexed integer array nums. The array nums is beautiful if:
 *
 * nums.length is even.
 * nums[i] != nums[i + 1] for all i % 2 == 0.
 * Note that an empty array is considered beautiful.
 *
 * You can delete any number of elements from nums.
 * When you delete an element,
 * all the elements to the right of the deleted element will be shifted one unit to the left to fill the gap created
 * and all the elements to the left of the deleted element will remain unchanged.
 *
 * Return the minimum number of elements to delete from nums to make it beautiful.
 */

export function minDeletion(nums: number[]): number {
  let result = 0
  let size = 0
  let last = -1

  nums.forEach((num, i) => {
    if (num === last && size % 2) {
      result += 1
    } else {
      size += 1
      last = num
    }
  })

  return result + (size % 2)
}
