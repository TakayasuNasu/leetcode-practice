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
  let max = 0
  const map: Map<number, number> = new Map()

  const helper = (node: TreeNode): number => {
    const left = node.left == null ? 0 : helper(node.left)
    const right = node.right == null ? 0 : helper(node.right)
    const sum = left + right + node.val
    const v = map.get(sum) || 0
    map.set(sum, v + 1)
    max = Math.max(max, map.get(sum)!)
    return sum
  }

  helper(root)

  const result: number[] = []

  for (const [k, v] of map) {
    if (v == max) result.push(k)
  }

  return result
}
