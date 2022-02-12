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
  return [1]
}
