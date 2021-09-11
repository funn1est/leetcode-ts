/// https://leetcode-cn.com/problems/di-yi-ge-zhi-chu-xian-yi-ci-de-zi-fu-lcof

function firstUniqChar(s: string): string {
  const map: Record<string, boolean> = {};
  for (let i = 0; i < s.length; i += 1) {
    if (map[s[i]] === undefined) {
      map[s[i]] = true;
    } else {
      map[s[i]] = false;
    }
  }
  for (const [key, isUniq] of Object.entries(map)) {
    if (isUniq === true) {
      return key;
    }
  }
  return ' ';
}

export { firstUniqChar };
