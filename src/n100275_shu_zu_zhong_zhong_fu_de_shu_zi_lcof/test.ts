import { findRepeatNumber, findRepeatNumber1 } from './index';

it('test n100275_shu_zu_zhong_zhong_fu_de_shu_zi_lcof', () => {
  expect(findRepeatNumber([2, 3, 1, 0, 2, 5, 3])).toStrictEqual(2);
  expect(findRepeatNumber1([2, 3, 1, 0, 2, 5, 3])).toStrictEqual(2);
});
