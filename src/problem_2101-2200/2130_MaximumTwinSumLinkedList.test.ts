import { toListNode } from '@/ListNode'
import { pairSum } from './2130_MaximumTwinSumLinkedList'

describe('pairSum', () => {
  test('head = [5,4,2,1]', () => {
    const head = toListNode([5, 4, 2, 1])
    const expected = 6
    expect(pairSum(head)).toBe(expected)
  })

  test('head = [4,2,2,3]', () => {
    const head = toListNode([4, 2, 2, 3])
    const expected = 7
    expect(pairSum(head)).toBe(expected)
  })
})
