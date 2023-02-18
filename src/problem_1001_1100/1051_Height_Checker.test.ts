import { sortArrayByParity } from './1051_Height_Checker'

test('0 test', () => {
  const input = [3, 1, 2, 4]
  const output = [4, 2, 3, 1]
  expect(sortArrayByParity(input)).toStrictEqual(output)
})
