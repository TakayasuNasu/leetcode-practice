import { fromArrayToTree } from '@/TreeNode'
import { rightSideView } from './199_BinaryTreeRightSideView'

test('0 test', () => {
  const root = fromArrayToTree([1, 2, 3, null, 5, null, 4])
  expect(rightSideView(root)).toStrictEqual([1, 3, 4])
})

test('1 test', () => {
  const root = fromArrayToTree([1, null, 3])
  expect(rightSideView(root)).toStrictEqual([1, 3])
})

test('2 test', () => {
  const root = fromArrayToTree([])
  expect(rightSideView(root)).toStrictEqual([])
})
