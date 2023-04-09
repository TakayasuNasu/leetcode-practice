import { fromArrayToTree, TreeNode } from './TreeNode'

describe('fromArrayToTree', () => {
  test('returns null for empty array', () => {
    expect(fromArrayToTree([])).toBe(null)
  })

  test('constructs correct tree for single node', () => {
    const root = [1]
    const expectedTree = new TreeNode(1)
    expect(fromArrayToTree(root)).toEqual(expectedTree)
  })

  test('constructs correct tree for multiple nodes', () => {
    const root = [1, 2, 3, 4, null, 5, 6]
    const expectedTree = new TreeNode(
      1,
      new TreeNode(2, new TreeNode(4), null),
      new TreeNode(3, new TreeNode(5), new TreeNode(6))
    )
    expect(fromArrayToTree(root)).toEqual(expectedTree)
  })

  test('', () => {
    const root = [1, 2, null, null, 3, 4]
    const expectedTree = new TreeNode(
      1,
      new TreeNode(2, null, new TreeNode(3, new TreeNode(4))),
      null
    )
    expect(fromArrayToTree(root)).toEqual(expectedTree)
  })
})
