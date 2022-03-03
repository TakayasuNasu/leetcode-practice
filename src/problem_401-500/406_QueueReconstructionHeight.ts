/**
 * https://leetcode.com/problems/queue-reconstruction-by-height/
 *
 * You are given an array of people, people, which are the attributes of some people in a queue (not necessarily in order).
 * Each people[i] = [hi, ki] represents the ith person of height hi with exactly ki other people in front who have a height greater than or equal to hi.
 *
 * Reconstruct and return the queue that is represented by the input array people.
 * The returned queue should be formatted as an array queue, where queue[j] = [hj, kj] is the attributes of the jth person in the queue (queue[0] is the person at the front of the queue).
 *
 */

export function reconstructQueue(people: number[][]): number[][] {
  const res = new Array<number[]>(people.length)
  people.sort((a, b) => (a[0] !== b[0] ? a[0] - b[0] : a[1] - b[1]))

  for (let i = 0; i < people.length; i++) {
    let count = people[i][1]
    for (let j = 0; j < res.length; j++) {
      if (count === 0 && !res[j]) {
        res[j] = people[i]
        break
      } else if (!res[j] || res[j][0] >= people[i][0]) {
        count--
      }
    }
  }
  return res
}
