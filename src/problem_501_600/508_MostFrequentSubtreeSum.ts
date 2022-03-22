/**
 * https://leetcode.com/problems/most-frequent-subtree-sum/
 *
 * Given the root of a binary tree, return the most frequent subtree sum.
 * If there is a tie, return all the values with the highest frequency in any order.
 *
 * The subtree sum of a node is defined as the sum of all the node values formed by the subtree rooted at that node (including the node itself).
 *
 */

import { TreeNode } from '@/TreeNode'

export function findFrequentTreeSum(root: TreeNode | null): number[] {
  if (!root) return [0]
  const map: Map<number, number> = new Map()
  helper(root, map)
  return []
}

function helper(node: TreeNode, map: Map<number, number>): number {
  const left = node.left == null ? 0 : helper(node.left, map)
  const right = node.right == null ? 0 : helper(node.right, map)
  const sum = left + right + node.val
  return sum
}
