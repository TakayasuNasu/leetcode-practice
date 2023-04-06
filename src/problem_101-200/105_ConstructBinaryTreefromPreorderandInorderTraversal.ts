/**
 * https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/
 *
 * Given two integer arrays preorder and inorder
 * where preorder is the preorder traversal of a binary tree
 * and inorder is the inorder traversal of the same tree,
 * construct and return the binary tree.
 */

import { TreeNode } from '@/TreeNode'

export function buildTree(
  preorder: number[],
  inorder: number[]
): TreeNode | null {
  if (preorder.length === 0) {
    return null
  }

  let head = new TreeNode(preorder.shift())
  let root = inorder.indexOf(head.val)

  head.left = buildTree(preorder.slice(0, root), inorder.slice(0, root))
  head.right = buildTree(preorder.slice(root), inorder.slice(root + 1))

  return head
}
