import { search } from './index';

it('test n100329_zai_pai_xu_shu_zu_zhong_cha_zhao_shu_zi_lcof', () => {
  expect(search([5, 7, 7, 8, 8, 10], 8)).toStrictEqual(2);
  expect(search([5, 7, 7, 8, 8, 10], 6)).toStrictEqual(0);
});
