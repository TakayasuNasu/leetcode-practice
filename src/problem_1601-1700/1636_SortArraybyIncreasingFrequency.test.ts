import { frequencySort } from './1636_SortArraybyIncreasingFrequency'

describe('frequencySort', () => {
  test('nums = [1,1,2,2,2,3]', () => {
    const nums = [1, 1, 2, 2, 2, 3]
    const expected = [3, 1, 1, 2, 2, 2]
    expect(frequencySort(nums)).toStrictEqual(expected)
  })

  test('nums = [2,3,1,3,2]', () => {
    const nums = [2, 3, 1, 3, 2]
    const expected = [1, 3, 3, 2, 2]
    expect(frequencySort(nums)).toStrictEqual(expected)
  })

  test('nums = [-1,1,-6,4,5,-6,1,4,1]', () => {
    const nums = [-1, 1, -6, 4, 5, -6, 1, 4, 1]
    const expected = [5, -1, 4, 4, -6, -6, 1, 1, 1]
    expect(frequencySort(nums)).toStrictEqual(expected)
  })
})
