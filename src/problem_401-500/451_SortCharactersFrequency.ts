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
  Array(...s).forEach((s) => {
    console.log(s)
  })
  const sorted = new Map<number, string>()
  let result = ''
  return result
}
