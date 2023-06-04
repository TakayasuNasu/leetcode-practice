/**
 * https://leetcode.com/problems/find-the-highest-altitude/
 *
 * Return the highest altitude of a point.
 */

export function largestAltitude(gain: number[]): number {
  let max = 0
  let current = 0

  for (let i = 0; i < gain.length; ++i) {
    current += gain[i]
    max = Math.max(max, current)
  }
  return max
}
