import { intersection } from './349_IntersectionTwoArrays'

test('0 test', () => {
  const nums1 = [1, 2, 2, 1]
  const nums2 = [2, 2]
  const output = [2]
  expect(intersection(nums1, nums2)).toStrictEqual(output)
})
