/**
 * https://leetcode.com/problems/spiral-matrix-iv/
 *
 * You are given two integers m and n, which represent the dimensions of a matrix.
 * You are also given the head of a linked list of integers.
 *
 * Generate an m x n matrix that contains the integers
 * in the linked list presented in spiral order (clockwise),
 * starting from the top-left of the matrix.
 * If there are remaining empty spaces, fill them with -1.
 *
 * Return the generated matrix.
 */

import { ListNode } from '@/ListNode'

export function spiralMatrix(
  m: number,
  n: number,
  head: ListNode | null
): number[][] {
  const matrix = Array.from({ length: m }, () =>
    Array.from({ length: n }, () => -1)
  )

  let rowStart = 0,
    rowEnd = m - 1,
    colStart = 0,
    colEnd = n - 1

  while (head !== null) {
    for (let i = colStart; i <= colEnd && head !== null; i++) {
      matrix[rowStart][i] = head.val
      head = head.next
    }

    rowStart += 1

    for (let i = rowStart; i <= rowEnd && head !== null; i++) {
      matrix[i][colEnd] = head.val
      head = head.next
    }
    colEnd -= 1

    for (let i = colEnd; i >= colStart && head !== null; i--) {
      matrix[rowEnd][i] = head.val
      head = head.next
    }
    rowEnd -= 1
    for (let i = rowEnd; i >= rowStart && head !== null; i--) {
      matrix[i][colStart] = head.val
      head = head.next
    }

    colStart += 1
  }
  return matrix
}
