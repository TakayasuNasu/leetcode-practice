/**
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/
 *
 * You are given an array prices where prices[i] is the price
 * of a given stock on the ith day.
 * Find the maximum profit you can achieve.
 * You may complete at most two transactions.
 * Note: You may not engage in multiple transactions simultaneously
 * (i.e., you must sell the stock before you buy again).
 */

export function maxProfit(prices: number[]): number {
  if (prices.length < 2) return 0

  let lMin = Number.MAX_SAFE_INTEGER
  let rMax = Number.MIN_SAFE_INTEGER

  let leftProfit = 0
  let rightProfit = 0

  const leftArray: number[] = new Array(prices.length)
  const rightArray: number[] = new Array(prices.length)

  for (let i = 0; i < prices.length; i++) {
    lMin = Math.min(lMin, prices[i])
    leftProfit = Math.max(leftProfit, prices[i] - lMin)
    leftArray[i] = leftProfit

    rMax = Math.max(rMax, prices[prices.length - 1 - i])
    rightProfit = Math.max(rightProfit, rMax - prices[prices.length - 1 - i])
    rightArray[prices.length - 1 - i] = rightProfit
  }

  const result = leftArray.map((leftValue, i) => leftValue + rightArray[i])

  return Math.max(...result)
}
