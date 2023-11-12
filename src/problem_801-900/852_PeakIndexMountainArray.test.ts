import { peakIndexInMountainArray } from './852_PeakIndexMountainArray'

describe('peakIndexInMountainArray', () => {
  it('should return peak index for a valid mountain array', () => {
    const arr1 = [0, 1, 0]
    const arr2 = [0, 2, 1, 0]
    const arr3 = [0, 1, 2, 3, 4, 5, 6, 5, 4, 3, 2, 1]
    expect(peakIndexInMountainArray(arr1)).toBe(1)
    expect(peakIndexInMountainArray(arr2)).toBe(1)
    expect(peakIndexInMountainArray(arr3)).toBe(6)
  })

  it('should handle arrays with length 3', () => {
    const arr1 = [1, 3, 2]
    const arr2 = [1, 2, 3]
    expect(peakIndexInMountainArray(arr1)).toBe(3)
    expect(peakIndexInMountainArray(arr2)).not.toBe(1)
  })

  it('should return peak index even for large numbers', () => {
    const arr = [0, 100000, 99999]
    expect(peakIndexInMountainArray(arr)).toBe(100000)
  })

  it('should handle larger mountain arrays', () => {
    const arr = Array.from({ length: 1e5 }, (_, i) => (i < 5e4 ? i : 1e5 - i))
    expect(peakIndexInMountainArray(arr)).toBe(5e4)
  })
})
