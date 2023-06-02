import { maximumUnits } from './1710_MaximumUnitsonTruck'

describe('maximumUnits', () => {
  test('boxTypes = [[1,3],[2,2],[3,1]], truckSize = 4', () => {
    const boxTypes = [
      [1, 3],
      [2, 2],
      [3, 1],
    ]
    const truckSize = 4
    maximumUnits(boxTypes, truckSize)
  })
})
