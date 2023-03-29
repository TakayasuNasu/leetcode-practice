import { toListNode } from '@/ListNode'
import { deleteMiddle } from './2095_DeleteMiddleNodeLinkedList'

describe('deleteMiddle', () => {
  test('head = [1,3,4,7,1,2,6]', () => {
    const head = toListNode([1, 3, 4, 7, 1, 2, 6])
    const expected = toListNode([1, 3, 4, 1, 2, 6])
    expect(deleteMiddle(head)).toStrictEqual(expected)
  })

  test('head = [1,2,3,4]', () => {
    const head = toListNode([1, 2, 3, 4])
    const expected = toListNode([1, 2, 4])
    expect(deleteMiddle(head)).toStrictEqual(expected)
  })

  test('head = [2,1]', () => {
    const head = toListNode([2, 1])
    const expected = toListNode([2])
    expect(deleteMiddle(head)).toStrictEqual(expected)
  })
})
