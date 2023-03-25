export class ListNode {
  val: number
  next: ListNode | null

  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

export const toListNode = (array: number[]): ListNode | null => {
  const head: ListNode | null = array
    .reverse()
    .reduce((acc: ListNode | null, current: number) => {
      if (acc == null) {
        acc = new ListNode(current)
      } else {
        acc = new ListNode(current, acc)
      }
      return acc
    }, null)

  return head
}
