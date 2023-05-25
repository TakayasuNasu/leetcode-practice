import { frequencySort } from './1636_SortArraybyIncreasingFrequency'

describe('frequencySort', () => {
  test('nums = [1,1,2,2,2,3]', () => {
    const nums = [1, 1, 2, 2, 2, 3]
    frequencySort(nums)
  })

  test('nums = [2,3,1,3,2]', () => {
    const nums = [2, 3, 1, 3, 2]
    frequencySort(nums)
  })

  test('nums = [-1,1,-6,4,5,-6,1,4,1]', () => {
    const nums = [-1, 1, -6, 4, 5, -6, 1, 4, 1]
    frequencySort(nums)
  })
})
