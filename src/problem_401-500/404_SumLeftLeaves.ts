/**
 * https://leetcode.com/problems/sum-of-left-leaves/
 *
 * Given the root of a binary tree, return the sum of all left leaves.
 *
 */

import { TreeNode } from '@/TreeNode'

export function sumOfLeftLeaves(root: TreeNode | null): number {
  if (!root) return 0

  const queue = [root]
  const result: number[] = []

  while (queue.length > 0) {
    const node = queue.shift()
    if (node?.left) {
      if (!node.left.left && !node.left.right) {
        result.push(node.left.val)
      } else {
        queue.push(node.left)
      }
    }

    if (node?.right) {
      queue.push(node.right)
    }
  }

  if (result.length < 1) return 0

  return result.reduce((a, b) => a + b)
}
