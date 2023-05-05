import { fromArrayToTree } from '@/TreeNode'
import { constructMaximumBinaryTree } from './654_MaximumBinaryTree'

describe('constructMaximumBinaryTree', () => {
  test('Input: nums = [3,2,1,6,0,5] Output: [6,3,5,null,2,0,null,null,1]', () => {
    const nums = [3, 2, 1, 6, 0, 5]
    const expected = fromArrayToTree([6, 3, 5, null, 2, 0, null, null, 1])
    expect(constructMaximumBinaryTree(nums)).toStrictEqual(expected)
  })

  test('Input: nums = [3,2,1] Output: [3,null,2,null,1]', () => {
    const nums = [3, 2, 1]
    const expected = fromArrayToTree([3, null, 2, null, 1])
    expect(constructMaximumBinaryTree(nums)).toStrictEqual(expected)
  })
})
