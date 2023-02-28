export function quickSort(array: Array<number>): Array<number> {
  if (array.length === 1) return array

  let pivot = array[array.length - 1]

  let leftArray = []
  let rightArray = []

  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] < pivot) {
      leftArray.push(array[i])
    } else {
      rightArray.push(array[i])
    }
  }

  if (leftArray.length > 0 && rightArray.length > 0) {
    return [...quickSort(leftArray), pivot, ...quickSort(rightArray)]
  } else if (leftArray.length > 0) {
    return [...quickSort(leftArray), pivot]
  } else {
    return [pivot, ...quickSort(rightArray)]
  }
}
