/**
 *
 * https://leetcode.com/problems/peak-index-in-a-mountain-array/
 *
 * An array arr is a mountain if the following properties hold:
 */

export function peakIndexInMountainArray(arr: number[]): number {
  let left = 0
  let right = arr.length - 1

  if (right == 2) return arr[1]

  while (left < right) {
    let mid = Math.floor((left + right) / 2)

    if (arr[mid] > arr[mid + 1]) {
      right = mid
    } else {
      left = mid + 1
    }
  }
  return left
}
