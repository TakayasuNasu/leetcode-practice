/**
 * https://leetcode.com/problems/generate-parentheses/
 *
 * Given n pairs of parentheses, write
 * a function to generate all combinations of well-formed parentheses.
 */

export function generateParenthesis(n: number): string[] {
  const result: Array<string> = []

  function recursion(
    openParens: number,
    closedParens: number,
    parenthesis: string
  ) {
    if (openParens === 0 && closedParens === 0) {
      result.push(parenthesis)
      return
    }

    if (openParens < closedParens) {
      recursion(openParens, closedParens - 1, parenthesis + ')')
    }

    if (openParens > 0) {
      recursion(openParens - 1, closedParens, parenthesis + '(')
    }
  }
  recursion(n, n, '')
  return result
}
