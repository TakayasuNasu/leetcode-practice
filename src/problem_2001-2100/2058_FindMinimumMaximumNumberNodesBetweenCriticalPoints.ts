/**
 * https://leetcode.com/problems/find-the-minimum-and-maximum-number-of-nodes-between-critical-points/
 *
 * A critical point in a linked list is defined as either a local maxima or a local minima.
 *
 * A node is a local maxima if the current node has a value strictly greater than the previous node and the next node.
 *
 * A node is a local minima if the current node has a value strictly smaller than the previous node and the next node.
 *
 * Note that a node can only be a local maxima/minima if there exists both a previous node and a next node.
 *
 * Given a linked list head, return an array of length 2 containing [minDistance, maxDistance]
 * where minDistance is the minimum distance between any two distinct critical points
 * and maxDistance is the maximum distance between any two distinct critical points.
 * If there are fewer than two critical points, return [-1, -1].
 */

import { ListNode } from '@/ListNode'

export function nodesBetweenCriticalPoints(head: ListNode | null): number[] {
  const result = [-1, -1]

  if (!head) {
    return result
  }

  let node = head,
    i = 0,
    pre = 0

  const cp = []

  while (node.next) {
    if (pre && node.next) {
      if (
        (pre > node.val && node.next.val > node.val) ||
        (pre < node.val && node.next.val < node.val)
      ) {
        cp.push(i)
      }
    }
    pre = node.val
    node = node.next
    i += 1
  }

  if (cp.length < 2) {
    return result
  }

  cp.sort((a, b) => a - b)

  let min = cp[1] - cp[0]
  const max = cp[cp.length - 1] - cp[0]

  for (let j = 1; j < cp.length - 1; j++) {
    min = Math.min(min, cp[j + 1] - cp[j])
  }

  return [min, max]
}
