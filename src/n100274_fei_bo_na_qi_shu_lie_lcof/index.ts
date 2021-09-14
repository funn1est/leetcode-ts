/// https://leetcode-cn.com/problems/fei-bo-na-qi-shu-lie-lcof

const MOD = 1000000007;

function fib(n: number): number {
  if (n <= 1) {
    return n;
  }
  const dp = [0, 1];
  for (let i = 2; i <= n; i += 1) {
    dp[i] = (dp[i - 1] + dp[i - 2]) % MOD;
  }
  return dp[n];
}

export { fib };
