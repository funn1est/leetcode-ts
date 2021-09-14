/// https://leetcode-cn.com/problems/qing-wa-tiao-tai-jie-wen-ti-lcof

const MOD = 1000000007;

function numWays(n: number): number {
  if (n <= 1) {
    return 1;
  }
  const dp = [1, 1];
  for (let i = 2; i <= n; i += 1) {
    dp[i] = (dp[i - 1] + dp[i - 2]) % MOD;
  }
  return dp[n];
}

export { numWays };
