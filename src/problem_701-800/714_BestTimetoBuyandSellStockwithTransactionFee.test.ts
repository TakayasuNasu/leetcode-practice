import { maxProfit } from './714_BestTimetoBuyandSellStockwithTransactionFee'

describe('maxProfit', () => {
  test('prices = [1,3,2,8,4,9], fee = 2', () => {
    const prices = [1, 3, 2, 8, 4, 9]
    const fee = 2
    const expected = 8
    expect(maxProfit(prices, fee)).toStrictEqual(expected)
  })

  test('prices = [1,3,7,5,10,3], fee = 3', () => {
    const prices = [1, 3, 7, 5, 10, 3]
    const fee = 3
    const expected = 6
    expect(maxProfit(prices, fee)).toStrictEqual(expected)
  })
})
