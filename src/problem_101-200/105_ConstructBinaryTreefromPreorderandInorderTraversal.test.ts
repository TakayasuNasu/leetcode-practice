import { fromArrayToTree } from '@/TreeNode'
import { buildTree } from './105_ConstructBinaryTreefromPreorderandInorderTraversal'

describe('buildTree', () => {
  test('preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]', () => {
    const preorder = [3, 9, 20, 15, 7]
    const inorder = [9, 3, 15, 20, 7]
    const expected = fromArrayToTree([3, 9, 20, null, null, 15, 7])
    expect(buildTree(preorder, inorder)).toStrictEqual(expected)
  })
})
