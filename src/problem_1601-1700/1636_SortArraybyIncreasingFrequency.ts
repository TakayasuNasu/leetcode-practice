/**
 * https://leetcode.com/problems/sort-array-by-increasing-frequency/
 *
 * Given an array of integers nums,
 * sort the array in increasing order based on the frequency of the values. If multiple values have the same frequency,
 * sort them in decreasing order.
 *
 * Return the sorted array.
 */

export function frequencySort(nums: number[]): number[] {
  const numberRecord: Record<number, number> = {}

  nums.forEach((num) => {
    numberRecord[num] = (numberRecord[num] || 0) + 1
  })

  const result = nums.sort((a, b) => {
    return numberRecord[a] != numberRecord[b]
      ? numberRecord[a] - numberRecord[b]
      : b - a
  })

  return result
}
