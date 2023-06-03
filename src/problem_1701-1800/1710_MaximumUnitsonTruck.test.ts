import { maximumUnits } from './1710_MaximumUnitsonTruck'

describe('maximumUnits', () => {
  test('boxTypes = [[1,3],[2,2],[3,1]], truckSize = 4', () => {
    const boxTypes = [
      [1, 3],
      [2, 2],
      [3, 1],
    ]
    const truckSize = 4
    const expected = 8
    expect(maximumUnits(boxTypes, truckSize)).toStrictEqual(expected)
  })

  test('boxTypes = [[5,10],[2,5],[4,7],[3,9]], truckSize = 10', () => {
    const boxTypes = [
      [5, 10],
      [2, 5],
      [4, 7],
      [3, 9],
    ]
    const truckSize = 10
    const expected = 91
    expect(maximumUnits(boxTypes, truckSize)).toStrictEqual(expected)
  })
})
