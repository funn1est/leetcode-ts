import { canWinNim } from './index';

it('test n292_nim_game', () => {
  expect(canWinNim(4)).toStrictEqual(false);
  expect(canWinNim(1)).toStrictEqual(true);
  expect(canWinNim(2)).toStrictEqual(true);
});
