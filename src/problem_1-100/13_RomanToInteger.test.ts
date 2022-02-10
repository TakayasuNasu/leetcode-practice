import { romanToInt } from './13_RomanToInteger'

test('0 test', () => {
  const s = 'III'
  const o = 3
  expect(romanToInt(s)).toBe(o)
})

test('1 test', () => {
  const s = 'LVIII'
  const o = 58
  expect(romanToInt(s)).toBe(o)
})

test('2 test', () => {
  const s = 'MCMXCIV'
  const o = 1994
  expect(romanToInt(s)).toBe(o)
})
