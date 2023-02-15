import { fromArrayToTree } from '@/TreeNode'
import { findFrequentTreeSum } from './508_MostFrequentSubtreeSum'

test('0 test', () => {
  const root = fromArrayToTree([5, 2, -3])
  const o = [2, -3, 4]
  expect(findFrequentTreeSum(root)).toStrictEqual(o)
})
