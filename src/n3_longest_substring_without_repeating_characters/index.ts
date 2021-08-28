/// https://leetcode.com/problems/longest-substring-without-repeating-characters

function lengthOfLongestSubstring(s: string): number {
  const map: Record<string, number> = {};
  let max = 0;
  let left = 0;
  for (let i = 0; i < s.length; i += 1) {
    const char = s[i];
    if (map[char] !== undefined) {
      // 有重复更新窗口大小
      left = Math.max(left, map[char] + 1);
    }
    // 记录当前字符的最近出现位置
    map[char] = i;
    max = Math.max(max, i - left + 1);
  }

  return max;
}

export { lengthOfLongestSubstring };
