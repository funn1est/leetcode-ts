import { numWays } from './index';

it('test n100277_qing_wa_tiao_tai_jie_wen_ti_lcof', () => {
  expect(numWays(2)).toStrictEqual(2);
  expect(numWays(7)).toStrictEqual(21);
  expect(numWays(0)).toStrictEqual(1);
});
