import { numTeams } from './1395_CountNumberofTeams'

describe('numTeams', () => {
  test('rating = [2,5,3,4,1]', () => {
    const rating = [2, 5, 3, 4, 1]
    const expected = 3
    expect(numTeams(rating)).toStrictEqual(expected)
  })

  test('rating = [2,1,3]', () => {
    const rating = [2, 1, 3]
    const expected = 0
    expect(numTeams(rating)).toStrictEqual(expected)
  })

  test('rating = [1,2,3,4]', () => {
    const rating = [1, 2, 3, 4]
    const expected = 4
    expect(numTeams(rating)).toStrictEqual(expected)
  })
})
