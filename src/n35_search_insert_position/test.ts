import { searchInsert } from './index';

it('test n35_search_insert_position', () => {
  expect(searchInsert([1, 3, 5, 6], 5)).toStrictEqual(2);
  expect(searchInsert([1, 3, 5, 6], 2)).toStrictEqual(1);
  expect(searchInsert([1, 3, 5, 6], 7)).toStrictEqual(4);
  expect(searchInsert([1, 3, 5, 6], 0)).toStrictEqual(0);
});
