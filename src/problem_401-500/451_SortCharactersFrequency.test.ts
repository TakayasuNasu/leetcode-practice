import { frequencySort } from './451_SortCharactersFrequency'

test('0 test', () => {
  const s = 'tree'
  const o = 'eert'
  const oo = 'eetr'
  expect([o, oo]).toContain(frequencySort(s))
})

test('1 test', () => {
  const s = 'cccaaa'
  const o = 'cccaaa'
  const oo = 'aaaccc'
  expect([o, oo]).toContain(frequencySort(s))
})

test('2 test', () => {
  const s = 'Aabb'
  const o = 'bbAa'
  const oo = 'bbaA'
  expect([o, oo]).toContain(frequencySort(s))
})

test('3 test', () => {
  const s = 'raaeaedere'
  const o = /eeeeaaarrd/
  expect(frequencySort(s)).toMatch(o)
})
