export function heapSort(array: Array<number>): Array<number> {
  let length = array.length

  for (let i = Math.floor(length / 2) - 1; i >= 0; i--) {
    maxHeapify(array, i, length)
  }

  for (let i = length - 1; i >= 0; i--) {
    swap(array, 0, i)
    maxHeapify(array, 0, i)
  }
  return array
}

function maxHeapify(array: Array<number>, index: number, length: number) {
  let left = 2 * index
  let right = 2 * index + 1
  let maximum: number

  if (right < length) {
    if (array[left] >= array[right]) {
      maximum = left
    } else {
      maximum = right
    }
  } else if (left < length) {
    maximum = left
  } else {
    return
  }

  if (array[index] < array[maximum]) {
    swap(array, index, maximum)
    maxHeapify(array, maximum, length)
  }
}

function swap(input: Array<number>, index_A: number, index_B: number) {
  let temp = input[index_A]

  input[index_A] = input[index_B]

  input[index_B] = temp
}
