import { heapSort } from './heapSort'

test('working sorting algorithm correctly', () => {
  let input = [3, 2, 1]
  let output = [1, 2, 3]
  expect(heapSort(input)).toStrictEqual(output)

  input = [2, 1, 3, 4]
  output = [1, 2, 3, 4]
  expect(heapSort(input)).toStrictEqual(output)

  input = [4, 3, 2, 1]
  output = [1, 2, 3, 4]
  expect(heapSort(input)).toStrictEqual(output)

  input = [1, 2, 4, 3]
  output = [1, 2, 3, 4]
  expect(heapSort(input)).toStrictEqual(output)
})
