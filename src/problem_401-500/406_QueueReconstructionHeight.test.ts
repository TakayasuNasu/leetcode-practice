import { reconstructQueue } from './406_QueueReconstructionHeight'

test('0 test', () => {
  const people = [
    [7, 0],
    [4, 4],
    [7, 1],
    [5, 0],
    [6, 1],
    [5, 2],
  ]
  const o = [
    [5, 0],
    [7, 0],
    [5, 2],
    [6, 1],
    [4, 4],
    [7, 1],
  ]
  expect(reconstructQueue(people)).toStrictEqual(o)
})
