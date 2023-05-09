import { canBeValid } from './2116_CheckifParenthesesStringCanBeValid'

describe('canBeValid', () => {
  test('s = "))()))", locked = "010100"', () => {
    const s = '))()))'
    const locked = '010100'
    const expected = true
    expect(canBeValid(s, locked)).toStrictEqual(expected)
  })

  test('s = "()()", locked = "0000"', () => {
    const s = '()()'
    const locked = '0000'
    const expected = true
    expect(canBeValid(s, locked)).toStrictEqual(expected)
  })

  test('s = ")", locked = "0"', () => {
    const s = ')'
    const locked = '0'
    const expected = false
    expect(canBeValid(s, locked)).toStrictEqual(expected)
  })
})
