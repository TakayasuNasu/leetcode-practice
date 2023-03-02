import { heightChecker } from './1051_Height_Checker'

test('0 test', () => {
  const input = [1, 1, 4, 2, 1, 3]
  const output = 3
  expect(heightChecker(input)).toBe(output)
})

test('1 test', () => {
  const input = [5, 1, 2, 3, 4]
  const output = 5
  expect(heightChecker(input)).toBe(output)
})

test('2 test', () => {
  const input = [1, 2, 3, 4, 5]
  const output = 0
  expect(heightChecker(input)).toBe(output)
})
