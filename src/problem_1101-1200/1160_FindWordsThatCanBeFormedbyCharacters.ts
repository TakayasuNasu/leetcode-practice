/**
 * https://leetcode.com/problems/find-words-that-can-be-formed-by-characters/
 *
 * ou are given an array of strings words and a string chars.
 *
 * A string is good if it can be formed by characters
 * from chars (each character can only be used once).
 *
 * Return the sum of lengths of all good strings in words.
 */

export function countCharacters(words: string[], chars: string): number {
  const alphaBet = new Map<string, number>()

  for (const char of chars) {
    alphaBet.set(char, (alphaBet.get(char) ?? 0) + 1)
  }

  const tempMap = new Map<string, number>()

  let result = 0

  for (const word of words) {
    const canCreateWord = [...word].every((char) => {
      tempMap.set(char, (tempMap.get(char) ?? 0) + 1)
      const aChar = alphaBet.get(char)
      const tChar = tempMap.get(char)
      if (!aChar || !tChar) return false
      return aChar - tChar >= 0
    })

    if (canCreateWord) {
      result += word.length
    }
    tempMap.clear()
  }

  return Number(result)
}
