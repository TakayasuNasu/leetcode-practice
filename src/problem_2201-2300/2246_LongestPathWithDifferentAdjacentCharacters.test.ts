import { longestPath } from './2246_LongestPathWithDifferentAdjacentCharacters'

describe('longestPath', () => {
  test('parent = [-1,0,0,1,1,2], s = "abacbe"', () => {
    const parent = [-1, 0, 0, 1, 1, 2]
    const s = 'abacbe'
    const expected = 3
    expect(longestPath(parent, s)).toBe(expected)
  })

  test('parent = [-1,0,0,0], s = "aabc"', () => {
    const parent = [-1, 0, 0, 0]
    const s = 'aabc'
    const expected = 3
    expect(longestPath(parent, s)).toBe(expected)
  })

  test('parent = [-1], s = "z"', () => {
    const parent = [-1]
    const s = 'z'
    const expected = 1
    expect(longestPath(parent, s)).toBe(expected)
  })
})
