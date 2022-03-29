/**
 * https://leetcode.com/problems/merge-two-binary-trees/
 *
 * ou are given two binary trees root1 and root2.
 * Imagine that when you put one of them to cover the other,
 * some nodes of the two trees are overlapped while the others are not.
 * You need to merge the two trees into a new binary tree.
 * The merge rule is that if two nodes overlap, then sum node values up as the new value of the merged node.
 * Otherwise, the NOT null node will be used as the node of the new tree.
 *
 *
 * Return the merged tree.
 *
 * Note: The merging process must start from the root nodes of both trees.
 */

import { TreeNode } from '@/TreeNode'

export function mergeTrees(
  root1: TreeNode | null,
  root2: TreeNode | null
): TreeNode | null {
  if (!root1) return root2
  if (!root2) return root1

  let mergedNode: TreeNode = new TreeNode()

  if (root1 && root2) {
    mergedNode = new TreeNode(root1.val + root2.val)
  } else if (root1) {
    mergedNode = root1
  } else if (root2) {
    mergedNode = root2
  }

  mergedNode.left = mergeTrees(root1.left, root2.left)
  mergedNode.right = mergeTrees(root1.right, root2.right)
  return mergedNode
}
