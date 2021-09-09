/// https://leetcode-cn.com/problems/shu-zu-zhong-zhong-fu-de-shu-zi-lcof
/// 所有数字都在 [0, n - 1] 的范围内

function findRepeatNumber(nums: number[]): number {
  const map: Record<number, number> = {};
  for (const v of nums) {
    if (!map[v]) {
      map[v] = 1;
    } else {
      return v;
    }
  }
  return -1;
}

function findRepeatNumber1(nums: number[]): number {
  for (let i = 0; i < nums.length; i += 1) {
    while (nums[i] !== i) {
      const n = nums[i];
      if (n === nums[n]) {
        return n;
      }

      nums[i] = nums[n];
      nums[n] = n;
    }
  }
  return -1;
}

export { findRepeatNumber, findRepeatNumber1 };
