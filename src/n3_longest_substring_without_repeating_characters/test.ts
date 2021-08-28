import { lengthOfLongestSubstring } from './index';

it('test n3_longest_substring_without_repeating_characters', () => {
  expect(lengthOfLongestSubstring('abcabcbb')).toStrictEqual(3);
  expect(lengthOfLongestSubstring('bbbbb')).toStrictEqual(1);
  expect(lengthOfLongestSubstring('pwwkew')).toStrictEqual(3);
  expect(lengthOfLongestSubstring('')).toStrictEqual(0);
});
