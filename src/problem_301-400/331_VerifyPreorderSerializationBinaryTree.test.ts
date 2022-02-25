import { isValidSerialization } from './331_VerifyPreorderSerializationBinaryTree'

test('0 test', () => {
  const input = '9,3,4,#,#,1,#,#,2,#,6,#,#'
  const output = true
  expect(isValidSerialization(input)).toBe(output)
})
