import { maxProfit } from './123_BestTimeToBuySellStockIII'

test('0 test', () => {
  const prices = [3, 3, 5, 0, 0, 3, 1, 4]
  const o = 6
  expect(maxProfit(prices)).toBe(o)
})

test('1 test', () => {
  const prices = [1, 2, 3, 4, 5]
  const o = 4
  expect(maxProfit(prices)).toBe(o)
})

test('2 test', () => {
  const prices = [7, 6, 4, 3, 1]
  const o = 0
  expect(maxProfit(prices)).toBe(o)
})
