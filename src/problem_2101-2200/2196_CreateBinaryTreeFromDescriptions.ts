/**
 * https://leetcode.com/problems/create-binary-tree-from-descriptions/
 *
 * You are given a 2D integer array descriptions
 * where descriptions[i] = [parenti, childi, isLefti] indicates
 * that parenti is the parent of childi in a binary tree of unique values. Furthermore,
 *
 * If isLefti == 1, then childi is the left child of parenti.
 * If isLefti == 0, then childi is the right child of parenti.
 * Construct the binary tree described by descriptions and return its root.
 *
 * The test cases will be generated such that the binary tree is valid.
 */

import { TreeNode } from '@/TreeNode'

export function createBinaryTree(descriptions: number[][]): TreeNode | null {
  const nodes: Record<number, TreeNode> = {}

  for (const description of descriptions) {
    const [parent, child, position] = description
    const isLeft = position === 1

    const parentNode = nodes[parent] || new TreeNode(parent)
    const childNode = nodes[child] || new TreeNode(child)

    if (isLeft) {
      parentNode.left = childNode
    } else {
      parentNode.right = childNode
    }

    nodes[parent] = parentNode
    nodes[child] = childNode
  }

  for (const description of descriptions) {
    delete nodes[description[1]]
  }

  const rootKeys = Object.keys(nodes)

  const rootKey = Number(rootKeys[0])

  console.log(nodes[rootKey])

  return nodes[rootKey]
}
