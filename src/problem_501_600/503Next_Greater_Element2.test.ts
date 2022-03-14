import { nextGreaterElements } from './503Next_Greater_Element2'

test('0 test', () => {
  const root = [1, 2, 1]
  const o = [2, -1, 2]
  expect(nextGreaterElements(root)).toBe(o)
})
