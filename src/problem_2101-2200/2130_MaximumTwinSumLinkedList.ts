/**
 * https://leetcode.com/problems/maximum-twin-sum-of-a-linked-list/
 *
 * In a linked list of size n, where n is even,
 * the ith node (0-indexed) of the linked list is known
 * as the twin of the (n-1-i)th node, if 0 <= i <= (n / 2) - 1.
 *
 * For example, if n = 4, then node 0 is the twin of node 3, and node 1 is the twin of node 2.
 * These are the only nodes with twins for n = 4.
 * The twin sum is defined as the sum of a node and its twin.
 *
 * Given the head of a linked list with even length, return the maximum twin sum of the linked list.
 */

import { ListNode } from '@/ListNode'

export function pairSum(head: ListNode | null): number {
  let left: [ListNode | null] = [head]
  return maxPairSum(left, head)
}

function maxPairSum(left: [ListNode | null], tail: ListNode | null): number {
  if (!left[0] || !tail) return 0
  let maxSum = maxPairSum(left, tail.next)
  let sum = left[0].val + tail.val
  left[0] = left[0].next
  maxSum = Math.max(maxSum, sum)

  return maxSum
}
