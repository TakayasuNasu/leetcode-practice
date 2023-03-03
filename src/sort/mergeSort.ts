export function mergeSort(array: Array<number>): Array<number> {
  if (array.length <= 1) return array

  let mid = Math.floor(array.length / 2)
  let left = mergeSort(array.slice(0, mid))
  let right = mergeSort(array.slice(mid))
  return merge(left, right)
}

const merge = (left: Array<number>, right: Array<number>) => {
  let sortedArr: Array<number> = []

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      const l = left.shift()
      if (l) sortedArr.push(l)
    } else {
      const r = right.shift()
      if (r) sortedArr.push(r)
    }
  }

  return [...sortedArr, ...left, ...right]
}
