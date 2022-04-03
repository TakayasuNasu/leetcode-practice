/**
 * https://leetcode.com/problems/to-lower-case/
 *
 * Given a string s, return the string after replacing every uppercase letter with the same lowercase letter.
 */

export function toLowerCase(s: string): string {
  let letter = ''

  for (const c of [...s]) {
    const letterCode = c.charCodeAt(0)
    if (letterCode < 65 || letterCode > 90) {
      letter += String.fromCharCode(letterCode)
      continue
    }
    letter += String.fromCharCode(letterCode + 32)
  }

  return letter
}
