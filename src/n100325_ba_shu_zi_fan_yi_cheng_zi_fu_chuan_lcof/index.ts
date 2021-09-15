/// https://leetcode-cn.com/problems/ba-shu-zi-fan-yi-cheng-zi-fu-chuan-lcof

function translateNum(num: number): number {
  const str = String(num);
  // 如果 [0, 1] 不可翻译 dp[2] = dp[1] = 1
  // 如果 [0, 1] 可翻译 dp[2] = dp[1] + dp[0] = 1 + dp[0] = 2
  let cur = 1;
  let pre = 1;
  for (let i = 2; i <= str.length; i += 1) {
    const n = Number(str.slice(i - 2, i));
    const tmp = cur;
    if (n >= 10 && n <= 25) {
      cur += pre;
    } else {
      // cur = cur;
    }
    pre = tmp;
  }

  return cur;
}

function translateNum1(num: number): number {
  const str = String(num);
  // 如果 [0, 1] 不可翻译 dp[2] = dp[1] = 1
  // 如果 [0, 1] 可翻译 dp[2] = dp[1] + dp[0] = 1 + dp[0] = 2
  const dp: number[] = [1, 1];
  for (let i = 2; i <= str.length; i += 1) {
    const n = Number(str.slice(i - 2, i));
    if (n >= 10 && n <= 25) {
      dp[i] = dp[i - 1] + dp[i - 2];
    } else {
      dp[i] = dp[i - 1];
    }
  }

  return dp[str.length];
}

export { translateNum, translateNum1 };
