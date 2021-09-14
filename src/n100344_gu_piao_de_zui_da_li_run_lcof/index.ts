/// https://leetcode-cn.com/problems/gu-piao-de-zui-da-li-run-lcof

function maxProfit(prices: number[]): number {
  if (prices.length < 2) {
    return 0;
  }
  let min = prices[0];
  let max = 0;
  for (let i = 1; i < prices.length; i += 1) {
    if (prices[i] < min) {
      min = prices[i];
    } else {
      const diff = prices[i] - min;
      if (diff > max) {
        max = diff;
      }
    }
  }
  return max;
}

function maxProfit1(prices: number[]): number {
  if (prices.length < 2) {
    return 0;
  }
  let min = prices[0];
  const dp = [0];
  for (let i = 1; i < prices.length; i += 1) {
    if (prices[i] < min) {
      min = prices[i];
    }
    dp[i] = Math.max(dp[i - 1], prices[i] - min);
  }
  return dp[prices.length - 1];
}

export { maxProfit, maxProfit1 };
