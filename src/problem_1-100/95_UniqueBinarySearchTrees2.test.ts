import { fromArrayToTree } from '@/TreeNode'
import { generateTrees } from './95_UniqueBinarySearchTrees2'

test('0 test', () => {
  const input = 3
  const output = [
    fromArrayToTree([1, null, 2, null, 3]),
    fromArrayToTree([1, null, 3, 2]),
    fromArrayToTree([2, 1, 3]),
    fromArrayToTree([3, 1, null, null, 2]),
    fromArrayToTree([3, 2, null, 1]),
  ]
  expect(generateTrees(input)).toBe(output)
})
