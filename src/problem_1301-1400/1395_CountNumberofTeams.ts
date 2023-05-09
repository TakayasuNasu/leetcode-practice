/**
 * https://leetcode.com/problems/count-number-of-teams/description/
 *
 * There are n soldiers standing in a line. Each soldier is assigned a unique rating value.
 *
 * You have to form a team of 3 soldiers amongst them under the following rules:
 *
 * Choose 3 soldiers with index (i, j, k) with rating (rating[i], rating[j], rating[k]).
 *
 * A team is valid if: (rating[i] < rating[j] < rating[k])
 * or (rating[i] > rating[j] > rating[k]) where (0 <= i < j < k < n).
 * Return the number of teams you can form given the conditions.
 * (soldiers can be part of multiple teams).
 */

export function numTeams(rating: number[]): number {
  const dp: [number, number][] = [...new Array(rating.length)].map((_) => [
    0, 0,
  ])

  let count = 0

  for (let i = 0; i < rating.length; i++) {
    for (let j = i + 1; j < rating.length; j++) {
      if (rating[j] > rating[i]) {
        dp[j][0] += 1
        count += dp[i][0]
      }

      if (rating[i] > rating[j]) {
        dp[j][1] += 1
        count += dp[i][1]
      }
    }
  }

  return count
}
