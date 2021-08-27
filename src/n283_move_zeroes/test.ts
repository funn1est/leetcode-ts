import { moveZeroes } from './index';

it('test n283_move_zeroes', () => {
  const nums1 = [0, 1, 0, 3, 12];
  moveZeroes(nums1);
  expect(nums1).toStrictEqual([1, 3, 12, 0, 0]);

  const nums2 = [2, 1];
  moveZeroes(nums2);
  expect(nums2).toStrictEqual([2, 1]);
});
