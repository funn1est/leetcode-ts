import { search } from './index';

it('test search', () => {
  expect(search([-1, 0, 3, 5, 9, 12], 9)).toStrictEqual(4);
  expect(search([-1, 0, 3, 5, 9, 12], 2)).toStrictEqual(-1);
});
