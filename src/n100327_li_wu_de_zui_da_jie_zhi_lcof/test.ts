import { maxValue, maxValue1 } from './index';
import { testFns } from '../utils';

it('test n100327_li_wu_de_zui_da_jie_zhi_lcof', () => {
  testFns([maxValue, maxValue1], (fn) => {
    expect(
      fn([
        [1, 3, 1],
        [1, 5, 1],
        [4, 2, 1],
      ]),
    ).toStrictEqual(12);
    expect(
      fn([
        [1, 2, 5],
        [3, 2, 1],
      ]),
    ).toStrictEqual(9);
  });
});
