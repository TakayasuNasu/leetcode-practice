import { combinationSum3 } from './216_CombinationSum3'

test('0 test', () => {
  const k = 3
  const n = 7
  const o = [[1, 2, 4]]
  expect(combinationSum3(k, n)).toStrictEqual(o)
})

test('1 test', () => {
  const k = 3
  const n = 9
  const o = [
    [1, 2, 6],
    [1, 3, 5],
    [2, 3, 4],
  ]
  expect(combinationSum3(k, n)).toStrictEqual(o)
})
