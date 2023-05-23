/**
 * https://leetcode.com/problems/maximum-sum-circular-subarray/
 *
 * Given a circular integer array nums of length n,
 * return the maximum possible sum of a non-empty subarray of nums.
 *
 * A circular array means the end of the array connects to the beginning of the array.
 * Formally, the next element of nums[i] is nums[(i + 1) % n] and the previous element of nums[i] is nums[(i - 1 + n) % n].
 *
 * A subarray may only include each element of the fixed buffer nums at most once.
 * Formally, for a subarray nums[i], nums[i + 1], ..., nums[j], there does not exist i <= k1, k2 <= j with k1 % n == k2 % n.
 */

export function maxSubarraySumCircular(nums: number[]): number {
  let nonCirculerSum = kadance(nums)
  let sum = 0

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i]
    nums[i] = -1 * nums[i]
  }

  let minimumSubarraySum = kadance(nums)
  let ans = sum + minimumSubarraySum

  if (ans === 0) {
    return nonCirculerSum
  }

  return Math.max(ans, nonCirculerSum)
}

function kadance(nums: number[]): number {
  let currSum = nums[0]
  let totalSum = nums[0]

  for (let i = 1; i < nums.length; i++) {
    if (currSum < 0) {
      currSum = 0
    }

    currSum += nums[i]
    totalSum = Math.max(currSum, totalSum)
  }

  return totalSum
}
