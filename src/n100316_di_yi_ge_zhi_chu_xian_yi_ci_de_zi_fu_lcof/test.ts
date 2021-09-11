import { firstUniqChar } from './index';

it('test n100316_di_yi_ge_zhi_chu_xian_yi_ci_de_zi_fu_lcof', () => {
  expect(firstUniqChar('abaccdeff')).toStrictEqual('b');
  expect(firstUniqChar('')).toStrictEqual(' ');
});
