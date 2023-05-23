import { maxSubarraySumCircular } from './918_MaximumSumCircularSubarray'

describe('maxSubarraySumCircular', () => {
  test('nums = [1,-2,3,-2]', () => {
    const nums = [1, -2, 3, -2]
    const expected = 3
    expect(maxSubarraySumCircular(nums)).toStrictEqual(expected)
  })

  test('nums = [5,-3,5]', () => {
    const nums = [5, -3, 5]
    const expected = 10
    expect(maxSubarraySumCircular(nums)).toStrictEqual(expected)
  })

  test('nums = [-3,-2,-3]', () => {
    const nums = [-3, -2, -3]
    const expected = -2
    expect(maxSubarraySumCircular(nums)).toStrictEqual(expected)
  })
})
