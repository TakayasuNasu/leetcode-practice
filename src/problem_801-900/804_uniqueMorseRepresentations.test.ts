import { uniqueMorseRepresentations } from './804_uniqueMorseRepresentations'

describe('uniqueMorseRepresentations', () => {
  test('should return correct unique morse code representations', () => {
    const words = ['gin', 'zen', 'gig', 'msg']
    const result = uniqueMorseRepresentations(words)
    expect(result).toBe(2)
  })

  test('should return 0 for empty array', () => {
    const words: string[] = []
    const result = uniqueMorseRepresentations(words)
    expect(result).toBe(0)
  })

  test('word = "a', () => {
    const words = ['a']
    const result = uniqueMorseRepresentations(words)
    expect(result).toBe(1)
  })
})
