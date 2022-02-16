/**
 * https://leetcode.com/problems/binary-tree-right-side-view/
 *
 * Given the root of a binary tree,
 * imagine yourself standing on the right side of it,
 * return the values of the nodes you can see ordered from top to bottom.
 */

/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

import { TreeNode } from '@/TreeNode'

export function rightSideView(root: TreeNode | null): number[] {
  if (!root) return []
  const queue = [root]
  let ans = [root.val]

  while (queue.length > 0) {
    let added = false
    const count = queue.length
    for (let i = 0; i < count; i++) {
      const curr = queue.shift()
      const val = curr?.right?.val ?? curr?.left?.val
      if (val && !added) {
        ans.push(val)
        added = true
      }
      if (curr?.right) {
        queue.push(curr.right)
      }
      if (curr?.left) {
        queue.push(curr.left)
      }
    }
  }

  return ans
}
