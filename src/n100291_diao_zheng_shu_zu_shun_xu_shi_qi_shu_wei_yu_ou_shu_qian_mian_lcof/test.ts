import { exchange } from './index';

it('test n100291_diao_zheng_shu_zu_shun_xu_shi_qi_shu_wei_yu_ou_shu_qian_mian_lcof', () => {
  expect(exchange([1, 2, 3, 4])).toStrictEqual([1, 3, 2, 4]);
  expect(exchange([1, 3, 5])).toStrictEqual([1, 3, 5]);
  expect(exchange([2, 16, 3, 5, 13, 1, 16, 1, 12, 18, 11, 8, 11, 11, 5, 1])).toStrictEqual([
    1, 5, 3, 5, 13, 1, 11, 1, 11, 11, 18, 8, 12, 16, 16, 2,
  ]);
});
