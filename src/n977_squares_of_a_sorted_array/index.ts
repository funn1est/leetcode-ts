/// https://leetcode-cn.com/problems/squares-of-a-sorted-array

function sortedSquares(nums: number[]): number[] {
  let left = 0;
  let right = nums.length - 1;
  let pos = right;
  const res = [];
  while (left <= right) {
    if (Math.abs(nums[left]) > Math.abs(nums[right])) {
      res[pos] = nums[left] * nums[left];
      left += 1;
    } else {
      res[pos] = nums[right] * nums[right];
      right -= 1;
    }
    pos -= 1;
  }
  return res;
}

export { sortedSquares };
