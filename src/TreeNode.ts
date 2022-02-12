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
  const midIdx = Math.floor(root.length / 2)
  return new TreeNode(
    root[0] || undefined,
    fromArrayToTree(root.slice(0, midIdx)),
    fromArrayToTree(root.slice(midIdx + 1))
  )
}
