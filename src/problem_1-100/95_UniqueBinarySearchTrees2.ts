/**
 * https://leetcode.com/problems/unique-binary-search-trees-ii/
 *
 * Given an integer n, return all the structurally unique BST's (binary search trees),
 * which has exactly n nodes of unique values from 1 to n.
 * Return the answer in any order.
 */

import { TreeNode } from '@/TreeNode'

export function generateTrees(n: number): Array<TreeNode | null> {
  if (n === 0) return []
  return helper(1, n)
}

const helper = (start: number, end: number): Array<TreeNode | null> => {
  if (start > end) return [null]
  let result: TreeNode[] = []
  for (let i = start; i <= end; i++) {
    let lefts = helper(start, i - 1)
    let rights = helper(i + 1, end)
    lefts.forEach((l) => {
      rights.forEach((r) => {
        result.push(new TreeNode(i, l, r))
      })
    })
  }
  return result
}
