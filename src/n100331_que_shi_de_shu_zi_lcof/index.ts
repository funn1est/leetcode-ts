/// https://leetcode-cn.com/problems/que-shi-de-shu-zi-lcof

function missingNumber(nums: number[]): number {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);
    if (nums[mid] === mid) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return left;
}

export { missingNumber };
