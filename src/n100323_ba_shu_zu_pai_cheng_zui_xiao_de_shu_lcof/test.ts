import { minNumber } from './index';

it('test n100323_ba_shu_zu_pai_cheng_zui_xiao_de_shu_lcof', () => {
  expect(minNumber([10, 2])).toStrictEqual('102');
  expect(minNumber([3, 30, 34, 5, 9])).toStrictEqual('3033459');
});
