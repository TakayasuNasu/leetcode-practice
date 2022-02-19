import { fromArrayToTree } from '@/TreeNode'
import { binaryTreePaths } from './257_BinaryTreePaths'

test('0 test', () => {
  const root = fromArrayToTree([1, 2, 3, null, 5])
  const o = ['1->2->5', '1->3']
  expect(binaryTreePaths(root)).toBe(o)
})
