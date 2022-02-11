import { maxProfit } from './123_BestTimeToBuySellStockIII'

test('0 test', () => {
  const prices = [3, 3, 5, 0, 0, 3, 1, 4]
  const o = 6
  expect(maxProfit(prices)).toBe(o)
})
