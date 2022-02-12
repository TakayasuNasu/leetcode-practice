import { fromArrayToTree } from '@/TreeNode'
import { rightSideView } from './199_BinaryTreeRightSideView'

test('0 test', () => {
  const root = fromArrayToTree([1, 2, 3, null, 5, null, 4])
  expect(rightSideView(root)).toBe([1, 3, 4])
})
