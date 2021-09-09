/// https://leetcode-cn.com/problems/running-sum-of-1d-array

function runningSum(nums: number[]): number[] {
  const res: number[] = [];
  let sum = 0;
  nums.forEach((val) => {
    sum += val;
    res.push(sum);
  });
  return res;
}

export { runningSum };
