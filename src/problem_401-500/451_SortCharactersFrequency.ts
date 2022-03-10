/**
 * https://leetcode.com/problems/sort-characters-by-frequency/
 *
 * Given a string s, sort it in decreasing order based on the frequency of the characters.
 * The frequency of a character is the number of times it appears in the string.
 *
 * Return the sorted string. If there are multiple answers, return any of them.
 */

export function frequencySort(s: string): string {
  const map = new Map<string, number>()
  let max = 0

  Array(...s).forEach((s) => {
    const k = map.get(s) || 0
    map.set(s, k + 1)
    if (max < map.get(s)!) {
      max = map.get(s)!
    }
  })

  const sorted = new Map<number, string>()

  for (const [s, num] of map) {
    const n = sorted.get(num)
    if (typeof n === 'string') {
      sorted.set(num, n + helper(num, s))
    } else {
      sorted.set(num, helper(num, s))
    }
  }

  let result = ''

  for (const [, s] of sorted) {
    result = s + result
  }

  return result
}

function helper(length: number, c: string) {
  const s = Array(length).fill(c).join('')
  return s
}
