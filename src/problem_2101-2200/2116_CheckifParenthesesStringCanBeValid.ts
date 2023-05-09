/**
 * https://leetcode.com/problems/check-if-a-parentheses-string-can-be-valid/
 *
 * It is ().
 * It can be written as AB (A concatenated with B),
 * where A and B are valid parentheses strings.
 * It can be written as (A), where A is a valid parentheses string.
 * You are given a parentheses string s and a string locked, both of length n.
 * locked is a binary string consisting only of '0's and '1's. For each index i of locked,
 *
 * If locked[i] is '1', you cannot change s[i].
 * But if locked[i] is '0', you can change s[i] to either '(' or ')'.
 * Return true if you can make s a valid parentheses string. Otherwise, return false.
 */

export function canBeValid(s: string, locked: string): boolean {
  if (s.length % 2 !== 0) {
    return false
  }

  function validate(str: string[], locked: string[], op: string): boolean {
    let balance = 0

    for (let [i, c] of str.entries()) {
      if (c === op || locked[i] === '0') {
        balance += 1
      } else {
        balance -= 1
      }

      if (balance < 0) {
        return false
      }
    }

    return true
  }

  const strArr = s.split('')
  const lockedArr = locked.split('')

  return (
    validate(strArr, lockedArr, '(') &&
    validate(strArr.reverse(), lockedArr.reverse(), ')')
  )
}
