export class ListNode {
  val: number
  next: ListNode | null

  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

export const toListNode = (array: number[]): ListNode | null => {
  const head: ListNode | null = [...array]
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

export const toArray = (head: ListNode | null): number[] => {
  const array = []

  while (head) {
    array.push(head.val)
    head = head.next
  }
  return array
}

export const reverse = (head: ListNode | null) => {
  let node = head,
    previous = null,
    nextNode

  while (node) {
    nextNode = node.next
    node.next = previous
    previous = node
    node = nextNode
  }

  return previous
}
