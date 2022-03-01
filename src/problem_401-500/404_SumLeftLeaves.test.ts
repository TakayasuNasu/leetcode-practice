import { fromArrayToTree } from '@/TreeNode'
import { sumOfLeftLeaves } from './404_SumLeftLeaves'

test('0 test', () => {
  const root = fromArrayToTree([3, 9, 20, null, null, 15, 7])
  const o = 24
  expect(sumOfLeftLeaves(root)).toBe(o)
})

test('1 test', () => {
  const root = fromArrayToTree([1])
  const o = 0
  expect(sumOfLeftLeaves(root)).toBe(o)
})

test('2 test', () => {
  const root = fromArrayToTree([1, 2, 3, 4, 5])
  const o = 4
  expect(sumOfLeftLeaves(root)).toBe(o)
})
