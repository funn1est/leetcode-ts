/// https://leetcode-cn.com/problems/he-wei-sde-liang-ge-shu-zi-lcof

function twoSum(nums: number[], target: number): number[] {
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    const sum = nums[left] + nums[right];
    if (sum === target) {
      return [nums[left], nums[right]];
    }
    if (sum > target) {
      right -= 1;
    } else {
      left += 1;
    }
  }

  return [];
}

export { twoSum };
