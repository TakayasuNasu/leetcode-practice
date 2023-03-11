import { selectionSort } from './selectionSort'

test('working sorting algorithm correctly', () => {
  let input = [2, 1, 3]
  let output = [1, 2, 3]
  expect(selectionSort(input)).toStrictEqual(output)

  input = [3, 2, 1]
  output = [1, 2, 3]
  expect(selectionSort(input)).toStrictEqual(output)

  input = [2, 1, 3, 4]
  output = [1, 2, 3, 4]
  expect(selectionSort(input)).toStrictEqual(output)

  input = [4, 3, 2, 1]
  output = [1, 2, 3, 4]
  expect(selectionSort(input)).toStrictEqual(output)

  input = [11, 24, 47, 33, 18]
  output = [11, 18, 24, 33, 47]
  expect(selectionSort(input)).toStrictEqual(output)
})
