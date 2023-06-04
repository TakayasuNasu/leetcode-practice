import { largestAltitude } from './1732_FindtheHighestAltitude'

describe('largestAltitude', () => {
  test('gain = [-5,1,5,0,-7]', () => {
    const gain = [-5, 1, 5, 0, -7]
    const expected = 1
    expect(largestAltitude(gain)).toStrictEqual(expected)
  })

  test('gain = [-4,-3,-2,-1,4,3,2]', () => {
    const gain = [-4, -3, -2, -1, 4, 3, 2]
    const expected = 0
    expect(largestAltitude(gain)).toStrictEqual(expected)
  })
})
