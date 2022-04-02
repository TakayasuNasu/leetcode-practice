import { toLowerCase } from './709_ToLowerCase'

test('0 test', () => {
  const s = 'Hello'
  const o = 'hello'
  expect(toLowerCase(s)).toBe(o)
})
