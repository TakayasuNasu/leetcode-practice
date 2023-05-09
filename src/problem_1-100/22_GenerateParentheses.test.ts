import { generateParenthesis } from './22_GenerateParentheses'

describe('generateParenthesis', () => {
  test('n = 3', () => {
    const n = 3
    const expected = ['()()()', '()(())', '(())()', '(()())', '((()))']
    expect(generateParenthesis(n)).toStrictEqual(expected)
  })

  test('n = 1', () => {
    const n = 1
    const expected = ['()']
    expect(generateParenthesis(n)).toStrictEqual(expected)
  })

  test('n = 2', () => {
    const n = 1
    const expected = ['()']
    expect(generateParenthesis(n)).toStrictEqual(expected)
  })
})
