/// https://leetcode-cn.com/problems/bu-ke-pai-zhong-de-shun-zi-lcof

function isStraight(nums: number[]): boolean {
  const map: Record<number, boolean> = {};
  let min = Number.MAX_SAFE_INTEGER;
  let max = Number.MIN_SAFE_INTEGER;
  for (const n of nums) {
    if (n === 0) {
      continue;
    }
    if (map[n]) {
      return false;
    }
    map[n] = true;
    if (n > max) {
      max = n;
    }
    if (n < min) {
      min = n;
    }
    if (max - min >= 5) {
      return false;
    }
  }
  return true;
}

export { isStraight };
