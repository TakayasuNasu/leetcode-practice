import { countCharacters } from './1160_FindWordsThatCanBeFormedbyCharacters'

describe('countCharacters', () => {
  test('words = ["cat","bt","hat","tree"], chars = "atach"', () => {
    const words = ['cat', 'bt', 'hat', 'tree']
    const chars = 'atach'
    const expected = 6
    expect(countCharacters(words, chars)).toStrictEqual(expected)
  })

  test('words = ["hello","world","leetcode"], chars = "welldonehoneyr"', () => {
    const words = ['hello', 'world', 'leetcode']
    const chars = 'welldonehoneyr'
    const expected = 10
    expect(countCharacters(words, chars)).toStrictEqual(expected)
  })
})
