import { sumOddLengthSubarrays } from './index';

it('test n1588_sum_of_all_odd_length_subarrays', () => {
  expect(sumOddLengthSubarrays([1, 4, 2, 5, 3])).toStrictEqual(58);
  expect(sumOddLengthSubarrays([1, 2])).toStrictEqual(3);
  expect(sumOddLengthSubarrays([10, 11, 12])).toStrictEqual(66);
});
