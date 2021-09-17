import { exist } from './index';

it('test n100279_ju_zhen_zhong_de_lu_jing_lcof', () => {
  expect(
    exist(
      [
        ['A', 'B', 'C', 'E'],
        ['S', 'F', 'C', 'S'],
        ['A', 'D', 'E', 'E'],
      ],
      'ABCCED',
    ),
  ).toStrictEqual(true);
  expect(
    exist(
      [
        ['a', 'b'],
        ['c', 'd'],
      ],
      'abcd',
    ),
  ).toStrictEqual(false);
});
