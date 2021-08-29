import { floodFill } from './index';

it('test n733_flood_fill', () => {
  expect(
    floodFill(
      [
        [1, 1, 1],
        [1, 1, 0],
        [1, 0, 1],
      ],
      1,
      1,
      2,
    ),
  ).toStrictEqual([
    [2, 2, 2],
    [2, 2, 0],
    [2, 0, 1],
  ]);
});
