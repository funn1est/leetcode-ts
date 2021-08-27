/// https://leetcode.com/problems/move-zeroes

/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
  let pivot = 0;
  for (let i = 0; i < nums.length; i += 1) {
    if (nums[i] !== 0) {
      if (pivot !== i) {
        nums[pivot] = nums[i];
        nums[i] = 0;
      }
      pivot += 1;
    }
  }
}

export { moveZeroes };
