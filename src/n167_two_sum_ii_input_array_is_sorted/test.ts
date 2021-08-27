import { twoSum } from './index';

it('test n167_two_sum_ii_input_array_is_sorted', () => {
  // expect(twoSum([2, 7, 11, 15], 9)).toStrictEqual([1, 2]);
  // expect(twoSum([2, 3, 4], 6)).toStrictEqual([1, 3]);
  // expect(twoSum([-1, 0], -1)).toStrictEqual([1, 2]);
  expect(twoSum([-3, 3, 4, 90], 0)).toStrictEqual([1, 2]);
});
