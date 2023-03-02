/**
 * https://leetcode.com/problems/height-checker/
 *
 * A school is trying to take an annual photo of all the students.
 * The students are asked to stand in a single file line
 * in non-decreasing order by height.
 * Let this ordering be represented by the integer array expected
 * where expected[i] is the expected height of the ith student in line.
 *
 * You are given an integer array heights representing the current order
 * that the students are standing in.
 *
 * Each heights[i] is the height of the ith student in line (0-indexed).
 * Return the number of indices where heights[i] != expected[i].
 */

import { quickSort } from '@/sort/quickSort'

export function heightChecker(heights: number[]): number {
  const sortedList = quickSort(heights)
  let result = 0
  if (heights.length != sortedList.length) return result

  for (let i = 0; i < heights.length; i++) {
    if (heights[i] != sortedList[i]) {
      result += 1
    }
  }
  return result
}
