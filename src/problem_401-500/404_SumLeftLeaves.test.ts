import { fromArrayToTree } from '@/TreeNode'
import { sumOfLeftLeaves } from './404_SumLeftLeaves'

test('', () => {
  const root = fromArrayToTree([1, 2, 3, null, 5, null, 4])
  const o = 24
  expect(sumOfLeftLeaves(root)).toBe(o)
})
