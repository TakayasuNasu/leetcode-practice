import { fromArrayToTree } from '@/TreeNode'
import { insertIntoMaxTree } from './998_MaximumBinaryTreeII'

describe('insertIntoMaxTree', () => {
  test('Input: root = [4,1,3,null,null,2], val = 5 Output: [5,4,null,1,3,null,null,2] Explanation: a = [1,4,2,3], b = [1,4,2,3,5]', () => {
    const root = fromArrayToTree([4, 1, 3, null, null, 2])
    const val = 5
    const expected = fromArrayToTree([5, 4, null, 1, 3, null, null, 2])
    expect(insertIntoMaxTree(root, val)).toStrictEqual(expected)
  })

  test('Input: root = [5,2,4,null,1], val = 3 Output: [5,2,4,null,1,null,3] Explanation: a = [2,1,5,4], b = [2,1,5,4,3]', () => {
    const root = fromArrayToTree([5, 2, 4, null, 1])
    const val = 3
    const expected = fromArrayToTree([5, 2, 4, null, 1, null, 3])
    expect(insertIntoMaxTree(root, val)).toStrictEqual(expected)
  })

  test('Input: root = [5,2,3,null,1], val = 4 Output: [5,2,4,null,1,3] Explanation: a = [2,1,5,3], b = [2,1,5,3,4]', () => {
    const root = fromArrayToTree([5, 2, 3, null, 1])
    const val = 4
    const expected = fromArrayToTree([5, 2, 4, null, 1, 3])
    expect(insertIntoMaxTree(root, val)).toStrictEqual(expected)
  })
})
