import { permute } from './46_Permutations'

test('0 test', () => {
  const input = [1, 2, 3]
  const output = [
    [1, 2, 3],
    [1, 3, 2],
    [2, 1, 3],
    [2, 3, 1],
    [3, 1, 2],
    [3, 2, 1],
  ]
  expect(permute(input)).toStrictEqual(output)
})

test('1 test', () => {
  const input = [0, 1]
  const output = [
    [0, 1],
    [1, 0],
  ]
  expect(permute(input)).toStrictEqual(output)
})

test('2 test', () => {
  const input = [1]
  const output = [[1]]
  expect(permute(input)).toStrictEqual(output)
})
