import { combinationSum3 } from './216_CombinationSum3'

test('0 test', () => {
  const k = 3
  const n = 7
  const o = [[1, 2, 4]]
  expect(combinationSum3(k, n)).toStrictEqual(o)
})
