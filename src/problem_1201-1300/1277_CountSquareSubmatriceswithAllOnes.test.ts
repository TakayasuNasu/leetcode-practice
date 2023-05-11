import { countSquares } from './1277_CountSquareSubmatriceswithAllOnes'

describe('countSquares', () => {
  test('matrix = [0, 1, 1, 1]', () => {
    const matrix = [
      [0, 1, 1, 1],
      [1, 1, 1, 1],
      [0, 1, 1, 1],
    ]
    const expected = 15
    expect(countSquares(matrix)).toStrictEqual(expected)
  })

  test('matrix = [1, 0, 1]', () => {
    const matrix = [
      [1, 0, 1],
      [1, 1, 0],
      [1, 1, 0],
    ]
    const expected = 7
    expect(countSquares(matrix)).toStrictEqual(expected)
  })
})
