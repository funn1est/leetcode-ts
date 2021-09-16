/// https://leetcode-cn.com/problems/diao-zheng-shu-zu-shun-xu-shi-qi-shu-wei-yu-ou-shu-qian-mian-lcof

function exchange(nums: number[]): number[] {
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    while (left < right && nums[left] % 2 === 1) {
      left += 1;
    }
    while (left < right && nums[right] % 2 === 0) {
      right -= 1;
    }
    if (left < right) {
      const tmp = nums[left];
      nums[left] = nums[right];
      nums[right] = tmp;
    }
  }

  return nums;
}

export { exchange };
