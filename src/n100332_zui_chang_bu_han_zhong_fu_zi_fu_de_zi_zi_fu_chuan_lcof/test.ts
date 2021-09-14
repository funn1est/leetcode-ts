import { lengthOfLongestSubstring, lengthOfLongestSubstring1 } from './index';
import { testFns } from '../utils';

it('test n100332_zui_chang_bu_han_zhong_fu_zi_fu_de_zi_zi_fu_chuan_lcof', () => {
  testFns([lengthOfLongestSubstring, lengthOfLongestSubstring1], (fn) => {
    expect(fn('abcabcbb')).toStrictEqual(3);
    expect(fn('bbbbb')).toStrictEqual(1);
    expect(fn('pwwkew')).toStrictEqual(3);
    expect(fn('a')).toStrictEqual(1);
    expect(fn('dvdf')).toStrictEqual(3);
    expect(fn('')).toStrictEqual(0);
    expect(fn('abba')).toStrictEqual(2);
  });
});
