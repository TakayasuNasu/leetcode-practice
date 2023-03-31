import { toListNode } from '@/ListNode'
import { nodesBetweenCriticalPoints } from './2058_FindMinimumMaximumNumberNodesBetweenCriticalPoints'

describe('nodesBetweenCriticalPoints', () => {
  test('head = [3,1]', () => {
    const head = toListNode([3, 1])
    const expected = [-1, -1]
    expect(nodesBetweenCriticalPoints(head)).toStrictEqual(expected)
  })

  test('head = [5,3,1,2,5,1,2]', () => {
    const head = toListNode([5, 3, 1, 2, 5, 1, 2])
    const expected = [1, 3]
    expect(nodesBetweenCriticalPoints(head)).toStrictEqual(expected)
  })

  test('head = [1,3,2,2,3,2,2,2,7]', () => {
    const head = toListNode([1, 3, 2, 2, 3, 2, 2, 2, 7])
    const expected = [3, 3]
    expect(nodesBetweenCriticalPoints(head)).toStrictEqual(expected)
  })
})
