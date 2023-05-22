function maxProfit(prices) {
  if (prices.length < 2) {
    return -1;
  }

  let minPrice = prices[0];
  let maxProfit = 0;

  for (let i = 1; i < prices.length; i++) {
    const currentPrice = prices[i];

    if (currentPrice < minPrice) {
      minPrice = currentPrice;
    }

    const potentialProfit = currentPrice - minPrice;

    if (potentialProfit > maxProfit) {
      maxProfit = potentialProfit;
    }
  }

  if (maxProfit === 0) {
    return -1;
  }

  return maxProfit;
}

const prices = [45, 24, 35, 31, 40, 38, 11];
console.log(maxProfit(prices));
