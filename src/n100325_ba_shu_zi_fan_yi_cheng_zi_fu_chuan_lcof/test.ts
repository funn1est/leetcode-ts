import { translateNum, translateNum1 } from './index';
import { testFns } from '../utils';

it('test n100325_ba_shu_zi_fan_yi_cheng_zi_fu_chuan_lcof', () => {
  testFns([translateNum, translateNum1], (fn) => {
    expect(fn(12258)).toStrictEqual(5);
    expect(fn(25)).toStrictEqual(2);
  });
});
