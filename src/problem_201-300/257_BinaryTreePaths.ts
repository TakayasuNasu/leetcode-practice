/**
 * https://leetcode.com/problems/binary-tree-paths/
 *
 * Given the root of a binary tree, return all root-to-leaf paths in any order.
 * A leaf is a node with no children.
 */

import { TreeNode } from '@/TreeNode'

export function binaryTreePaths(root: TreeNode | null): string[] {
  if (!root) return []

  const result: string[] = []

  const backtrack = (root: TreeNode, curr: string) => {
    if (!root.left && !root.right) {
      curr = curr + root.val.toString()
      result.push(curr)
      return
    }
    curr = curr + root.val.toString() + '->'
    if (root.left) backtrack(root.left, curr)
    if (root.right) backtrack(root.right, curr)
  }

  backtrack(root, '')
  return result
}
