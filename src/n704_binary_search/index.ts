function search(nums: number[], target: number): number {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    const pivot = left + Math.floor((right - left) / 2);
    if (nums[pivot] === target) {
      return pivot;
    } else if (nums[pivot] < target) {
      left = pivot + 1;
    } else {
      right = pivot - 1;
    }
  }
  return -1;
}

export { search };
