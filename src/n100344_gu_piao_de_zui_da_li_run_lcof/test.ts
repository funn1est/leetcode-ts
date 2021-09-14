import { maxProfit, maxProfit1 } from './index';
import { testFns } from '../utils';

it('test n100344_gu_piao_de_zui_da_li_run_lcof', () => {
  testFns([maxProfit, maxProfit1], (fn) => {
    expect(fn([7, 1, 5, 3, 6, 4])).toStrictEqual(5);
    expect(fn([7, 6, 4, 3, 1])).toStrictEqual(0);
  });
});
