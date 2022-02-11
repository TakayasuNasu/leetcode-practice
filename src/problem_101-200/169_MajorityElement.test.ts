import { majorityElement } from './169_MajorityElement'

test('0 test', () => {
  const nums = [3, 2, 3]
  const output = 3
  expect(majorityElement(nums)).toStrictEqual(output)
})

test('1 test', () => {
  const nums = [2, 2, 1, 1, 1, 2, 2]
  const output = 2
  expect(majorityElement(nums)).toStrictEqual(output)
})
