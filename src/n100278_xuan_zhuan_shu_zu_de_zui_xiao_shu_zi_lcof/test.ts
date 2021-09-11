import { minArray, minArray1 } from './index';
import { testFns } from '../utils';

it('test n100278_xuan_zhuan_shu_zu_de_zui_xiao_shu_zi_lcof', () => {
  testFns([minArray, minArray1], (fn) => {
    expect(fn([3, 4, 5, 1, 2])).toStrictEqual(1);
    expect(fn([2, 2, 2, 0, 1])).toStrictEqual(0);
  });
});
