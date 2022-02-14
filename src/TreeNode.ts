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
  if (!root[0]) return null
  const v = root.shift() ?? undefined
  const l = root.shift() ?? null
  const r = root.shift() ?? null
  const i = Math.floor(root.length / 2)
  return new TreeNode(
    v,
    fromArrayToTree([l, ...root.slice(0, i)]),
    fromArrayToTree([r, ...root.slice(i)])
  )
}
