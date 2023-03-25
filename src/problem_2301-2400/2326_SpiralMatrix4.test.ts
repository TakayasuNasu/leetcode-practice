import { toListNode } from '@/ListNode'
import { spiralMatrix } from './2326_SpiralMatrix4'

describe('spiralMatrix', () => {
  test('m = 3, n = 5, return two-dimensions array', () => {
    const m = 3
    const n = 5
    const head = toListNode([3, 0, 2, 6, 8, 1, 7, 9, 4, 2, 5, 5, 0])
    const expected = [
      [3, 0, 2, 6, 8],
      [5, 0, -1, -1, 1],
      [5, 2, 4, 9, 7],
    ]
    expect(spiralMatrix(m, n, head)).toStrictEqual(expected)
  })

  test('m = 1, n = 4, return two-dimensions array', () => {
    const m = 1
    const n = 4
    const head = toListNode([0, 1, 2])
    const expected = [[0, 1, 2, -1]]
    expect(spiralMatrix(m, n, head)).toStrictEqual(expected)
  })
})
