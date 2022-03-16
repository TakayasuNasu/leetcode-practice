export class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null

  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
  }
}

export const fromArrayToTree = (
  root: Array<number | null>
): TreeNode | null => {
  if (root.length == 0) return null
  if (root == null || root.length == 0) {
    return null
  }
  return toTree(root, 0)
}

const toTree = (root: Array<number | null>, i: number): TreeNode | null => {
  if (i >= root.length) return null
  if (!root[i]) return null
  const v = root[i]!

  return new TreeNode(v, toTree(root, i * 2 + 1), toTree(root, i * 2 + 2))
}
