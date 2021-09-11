import { findNumberIn2DArray } from './index';

it('test n100276_er_wei_shu_zu_zhong_de_cha_zhao_lcof', () => {
  expect(findNumberIn2DArray([], 0)).toStrictEqual(false);
  expect(
    findNumberIn2DArray(
      [
        [1, 4, 7, 11, 15],
        [2, 5, 8, 12, 19],
        [3, 6, 9, 16, 22],
        [10, 13, 14, 17, 24],
        [18, 21, 23, 26, 30],
      ],
      5,
    ),
  ).toStrictEqual(true);
  expect(
    findNumberIn2DArray(
      [
        [1, 4, 7, 11, 15],
        [2, 5, 8, 12, 19],
        [3, 6, 9, 16, 22],
        [10, 13, 14, 17, 24],
        [18, 21, 23, 26, 30],
      ],
      20,
    ),
  ).toStrictEqual(false);
});
