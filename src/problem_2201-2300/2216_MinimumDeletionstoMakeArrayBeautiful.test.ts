import { minDeletion } from './2216_MinimumDeletionstoMakeArrayBeautiful'

describe('minDeletion', () => {
  test('nums = [1,1,2,3,5]', () => {
    const nums = [1, 1, 2, 3, 5]
    const expected = 1
    expect(minDeletion(nums)).toStrictEqual(expected)
  })

  test('nums = [1,1,2,2,3,3]', () => {
    const nums = [1, 1, 2, 2, 3, 3]
    const expected = 2
    expect(minDeletion(nums)).toStrictEqual(expected)
  })
})
