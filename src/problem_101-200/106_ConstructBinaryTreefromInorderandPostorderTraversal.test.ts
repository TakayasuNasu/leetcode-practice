import { fromArrayToTree } from '@/TreeNode'
import { buildTree } from './106_ConstructBinaryTreefromInorderandPostorderTraversal'

describe('buildTree', () => {
  test('inorder = [9,3,15,20,7], postorder = [9,15,7,20,3]', () => {
    const inorder = [9, 3, 15, 20, 7]
    const postorder = [9, 15, 7, 20, 3]
    const expected = fromArrayToTree([3, 9, 20, null, null, 15, 7])
    expect(buildTree(inorder, postorder)).toStrictEqual(expected)
  })
})
