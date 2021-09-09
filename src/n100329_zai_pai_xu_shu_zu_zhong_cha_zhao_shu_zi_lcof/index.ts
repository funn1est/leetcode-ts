/// https://leetcode-cn.com/problems/zai-pai-xu-shu-zu-zhong-cha-zhao-shu-zi-lcof

function search(nums: number[], target: number): number {
  let left = 0;
  let right = nums.length - 1;
  let idx = -1;

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);
    if (nums[mid] === target) {
      idx = mid;
      break;
    } else if (nums[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  if (idx === -1) {
    return 0;
  }

  left = idx;
  while (left > 0 && nums[left - 1] === target) {
    left -= 1;
  }
  right = idx;
  while (right < nums.length - 1 && nums[right + 1] === target) {
    right += 1;
  }
  return right - left + 1;
}

export { search };
