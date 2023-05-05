/**
 * https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/
 *
 * Given two integer arrays inorder and postorder
 * where inorder is the inorder traversal of a binary tree
 * and postorder is the postorder traversal of the same tree,
 * construct and return the binary tree.
 */

import { TreeNode } from '@/TreeNode'

export function buildTree(
  inorder: number[],
  postorder: number[]
): TreeNode | null {
  if (inorder.length === 0) {
    return null
  }

  let head = new TreeNode(postorder.pop())
  let root = inorder.indexOf(head.val)

  head.right = buildTree(inorder.slice(root + 1), postorder)
  head.left = buildTree(inorder.slice(0, root), postorder)

  return head
}
