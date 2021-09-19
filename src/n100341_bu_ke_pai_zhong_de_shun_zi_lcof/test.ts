import { isStraight } from './index';

it('test n100341_bu_ke_pai_zhong_de_shun_zi_lcof', () => {
  expect(isStraight([1, 2, 3, 4, 5])).toStrictEqual(true);
  expect(isStraight([0, 0, 1, 2, 5])).toStrictEqual(true);
  expect(isStraight([0, 0, 1, 2, 9])).toStrictEqual(false);
  expect(isStraight([1, 2, 2, 3, 4])).toStrictEqual(false);
});
