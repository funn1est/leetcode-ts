import { numRescueBoats } from './index';

it('test n881_boats_to_save_people', () => {
  expect(numRescueBoats([1, 2], 3)).toStrictEqual(1);
  expect(numRescueBoats([3, 2, 2, 1], 3)).toStrictEqual(3);
  expect(numRescueBoats([3, 5, 3, 4], 5)).toStrictEqual(4);
  expect(numRescueBoats([44, 10, 29, 12, 49, 41, 23, 5, 17, 26], 50)).toStrictEqual(6);
});
