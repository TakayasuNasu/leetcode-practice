import { frequencySort } from './451_SortCharactersFrequency'

test('0 test', () => {
  const s = 'tree'
  const o = 'eert'
  expect(frequencySort(s)).toStrictEqual(o)
})
