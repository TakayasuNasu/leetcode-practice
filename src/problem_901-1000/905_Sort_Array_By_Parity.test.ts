import { sortArrayByParity } from './905_Sort_Array_By_Parity'

test('0 test', () => {
  const input = [3, 1, 2, 4]
  const output = [4, 2, 3, 1]
  expect(sortArrayByParity(input)).toStrictEqual(output)
})
