import { fromArrayToTree } from '@/TreeNode'
import { mergeTrees } from './617_MergeTwoBinaryTrees'

test('0 test', () => {
  const root1 = fromArrayToTree([1, 3, 2, 5])
  const root2 = fromArrayToTree([2, 1, 3, null, 4, null, 7])
  const o = fromArrayToTree([3, 4, 5, 5, 4, null, 7])
  expect(mergeTrees(root1, root2)).toStrictEqual(o)
})

test('1 test', () => {
  const root1 = fromArrayToTree([1])
  const root2 = fromArrayToTree([1, 2])
  const o = fromArrayToTree([2, 7])
  expect(mergeTrees(root1, root2)).toStrictEqual(o)
})
