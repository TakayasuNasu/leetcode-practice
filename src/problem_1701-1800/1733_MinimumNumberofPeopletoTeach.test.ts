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
    minimumTeachings(n, languages, friendships)
  })
})
