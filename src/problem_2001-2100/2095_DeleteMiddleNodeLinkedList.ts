/**
 * https://leetcode.com/problems/delete-the-middle-node-of-a-linked-list/
 *
 * You are given the head of a linked list.
 * Delete the middle node, and return the head of the modified linked list.
 *
 * The middle node of a linked list of size n is the ⌊n / 2⌋th node
 * from the start using 0-based indexing,
 * where ⌊x⌋ denotes the largest integer less than or equal to x.
 *
 * For n = 1, 2, 3, 4, and 5, the middle nodes are 0, 1, 1, 2, and 2, respectively.
 */

import { ListNode } from '@/ListNode'

export function deleteMiddle(head: ListNode | null): ListNode | null {
  if (!head || !head.next) {
    return null
  }

  let node = head,
    mid = head,
    prev = null

  while (node && node.next) {
    prev = mid
    mid = mid.next!
    node = node.next.next!
  }

  if (prev && prev.next) {
    prev.next = prev.next.next
  }

  return head
}
