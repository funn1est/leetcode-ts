import { twoSum } from './index';

it('test n100322_he_wei_sde_liang_ge_shu_zi_lcof', () => {
  expect(twoSum([2, 7, 11, 15], 9)).toStrictEqual([2, 7]);
  expect(twoSum([10, 26, 30, 31, 47, 60], 40)).toStrictEqual([10, 30]);
});
