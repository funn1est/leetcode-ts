import { maxSubArray, maxSubArray1 } from './index';
import { testFns } from '../utils';

it('test n100304_lian_xu_zi_shu_zu_de_zui_da_he_lcof', () => {
  testFns([maxSubArray, maxSubArray1], (fn) => {
    expect(fn([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toStrictEqual(6);
  });
});
