/// https://leetcode-cn.com/problems/lian-xu-zi-shu-zu-de-zui-da-he-lcof

function maxSubArray(nums: number[]): number {
  let max = nums[0];
  let maxSum = max;
  for (let i = 1; i < nums.length; i += 1) {
    maxSum = nums[i] + (maxSum > 0 ? maxSum : 0);
    max = Math.max(max, maxSum);
  }
  return max;
}

function maxSubArray1(nums: number[]): number {
  let max = nums[0];
  const dp: number[] = [max];
  for (let i = 1; i < nums.length; i += 1) {
    dp[i] = nums[i] + (dp[i - 1] > 0 ? dp[i - 1] : 0);
    max = Math.max(max, dp[i]);
  }

  return max;
}

export { maxSubArray, maxSubArray1 };
