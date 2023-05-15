/**
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/
 *
 * You are given an array prices
 * where prices[i] is the price of a given stock
 * on the ith day, and an integer fee representing a transaction fee.
 *
 * Find the maximum profit you can achieve.
 * You may complete as many transactions as you like,
 * but you need to pay the transaction fee for each transaction.
 *
 * Note: You may not engage in multiple transactions simultaneously
 * (i.e., you must sell the stock before you buy again).
 */

export function maxProfit(prices: number[], fee: number): number {
  const m = prices.length
  const firstDay = 0
  const hold = 0
  const dp = new Array(m)

  for (let i = 0; i < m; i++) {
    dp[i] = new Array(2).fill(-1)
  }
  return manageStocks(firstDay, hold, fee, prices, dp)
}

const manageStocks = (
  ind: number,
  hold: number,
  fee: number,
  prices: number[],
  dp: number[][]
) => {
  if (ind >= prices.length) {
    return 0
  }

  if (dp[ind][hold] !== -1) {
    return dp[ind][hold]
  }

  let buyStock = 0
  let sellStock = 0
  let skipDay = 0

  if (hold === 0) {
    buyStock = -prices[ind] + manageStocks(ind + 1, 1, fee, prices, dp)
  } else if (true) {
    sellStock = prices[ind] - fee + manageStocks(ind + 1, 0, fee, prices, dp)
  }

  skipDay = manageStocks(ind + 1, hold, fee, prices, dp)

  return (dp[ind][hold] = Math.max(buyStock, sellStock, skipDay))
}
