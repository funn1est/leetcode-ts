import { reverseString } from './index';

it('test n344_reverse_string', () => {
  const s1 = ['h', 'e', 'l', 'l', 'o'];
  reverseString(s1);
  expect(s1).toStrictEqual(['o', 'l', 'l', 'e', 'h']);
  const s2 = ['H', 'a', 'n', 'n', 'a', 'h'];
  reverseString(s2);
  expect(s2).toStrictEqual(['h', 'a', 'n', 'n', 'a', 'H']);
});
