/**
 * https://leetcode.com/problems/maximum-units-on-a-truck/
 *
 * Return the maximum total number of units that can be put on the truck.
 */

export function maximumUnits(boxTypes: number[][], truckSize: number): number {
  boxTypes.sort((a, b) => b[1] - a[1])

  let total = 0
  let i = 0

  while (truckSize && i < boxTypes.length) {
    let [count, units] = boxTypes[i]
    if (count < truckSize) {
      total += count * units
      truckSize -= count
    } else {
      while (count && truckSize) {
        total += units
        count -= 1
        truckSize -= 1
      }
    }
    i += 1
  }
  return total
}
