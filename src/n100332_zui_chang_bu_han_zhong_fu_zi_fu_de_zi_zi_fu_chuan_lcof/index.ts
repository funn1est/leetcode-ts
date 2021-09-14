/// https://leetcode-cn.com/problems/zui-chang-bu-han-zhong-fu-zi-fu-de-zi-zi-fu-chuan-lcof

function lengthOfLongestSubstring(s: string): number {
  let max = 0;
  let idx = 0;
  const map: Record<string, number> = {};
  for (let i = 0; i < s.length; i += 1) {
    const c = s[i];
    if (map[c] !== undefined) {
      idx = Math.max(map[c] + 1, idx);
    }
    map[c] = i;
    max = Math.max(max, i - idx + 1);
  }

  return max;
}

function lengthOfLongestSubstring1(s: string): number {
  let max = 0;
  let count = 0;
  const map: Record<string, number> = {};
  for (let i = 0; i < s.length; i += 1) {
    const c = s[i];
    const charIdx = map[c] === undefined ? -1 : map[c];
    if (i - charIdx > count) {
      count += 1;
    } else {
      count = i - charIdx;
    }
    map[c] = i;
    max = Math.max(max, count);
  }

  return max;
}

export { lengthOfLongestSubstring, lengthOfLongestSubstring1 };
