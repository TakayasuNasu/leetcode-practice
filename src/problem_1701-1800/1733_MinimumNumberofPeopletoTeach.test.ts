import { minimumTeachings } from './1733_MinimumNumberofPeopletoTeach'

describe('minimumTeachings', () => {
  test('n = 2, languages = [[1],[2],[1,2]], friendships = [[1,2],[1,3],[2,3]]', () => {
    const n = 2
    const languages = [[1], [2], [1, 2]]
    const friendships = [
      [1, 2],
      [1, 3],
      [2, 3],
    ]
    const expected = 1
    expect(minimumTeachings(n, languages, friendships)).toBe(expected)
  })

  test('n = 3, languages = [[2],[1,3],[1,2],[3]], friendships = [[1,4],[1,2],[3,4],[2,3]]', () => {
    const n = 3
    const languages = [[2], [1, 3], [1, 2], [3]]
    const friendships = [
      [1, 4],
      [1, 2],
      [3, 4],
      [2, 3],
    ]
    const expected = 2
    expect(minimumTeachings(n, languages, friendships)).toBe(expected)
  })
})
