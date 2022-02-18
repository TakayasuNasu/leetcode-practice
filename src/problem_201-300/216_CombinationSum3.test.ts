import { combinationSum3 } from './216_CombinationSum3'

test('2 test', () => {
  const k = 3,
    n = 3
  const o = [[[1, 2, 4]]]
  expect(combinationSum3(k, n)).toStrictEqual(o)
})
