import { rearrangeCharacters } from './2287_RearrangeCharacterstoMakeTargetString'

describe('rearrangeCharacters', () => {
  test('s = "ilovecodingonleetcode", target = "code"', () => {
    const s = 'ilovecodingonleetcode'
    const target = 'code'
    const expected = 2
    expect(rearrangeCharacters(s, target)).toStrictEqual(expected)
  })

  test('s = "abcba", target = "abc"', () => {
    const s = 'abcba'
    const target = 'abc'
    const expected = 1
    expect(rearrangeCharacters(s, target)).toStrictEqual(expected)
  })

  test('s = "abbaccaddaeea", target = "aaaaa"', () => {
    const s = 'abbaccaddaeea'
    const target = 'aaaaa'
    const expected = 1
    expect(rearrangeCharacters(s, target)).toStrictEqual(expected)
  })
})
