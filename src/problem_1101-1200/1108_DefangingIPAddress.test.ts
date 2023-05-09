import { defangIPaddr } from './1108_DefangingIPAddress'

describe('defangIPaddr', () => {
  test('address = "1.1.1.1"', () => {
    const address = '1.1.1.1'
    const expected = '1[.]1[.]1[.]1'
    expect(defangIPaddr(address)).toStrictEqual(expected)
  })

  test('address = "255.100.50.0"', () => {
    const address = '255.100.50.0'
    const expected = '255[.]100[.]50[.]0'
    expect(defangIPaddr(address)).toStrictEqual(expected)
  })
})
