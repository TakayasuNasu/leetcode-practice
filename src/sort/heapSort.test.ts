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

  input = [21, 20, 44, 23]
  output = [20, 21, 23, 44]
  expect(heapSort(input)).toStrictEqual(output)

  input = [12, 88, 4, 53, 13]
  output = [4, 12, 13, 53, 88]
  expect(heapSort(input)).toStrictEqual(output)
})
