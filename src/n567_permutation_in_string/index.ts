/// https://leetcode.com/problems/permutation-in-string

function checkInclusion(s1: string, s2: string): boolean {
  // 窗口大小
  const len = s1.length;
  const map1: Record<string, number> = {};
  let map2: Record<string, number> = {};
  let count = 0;
  let leftChar = s2[0];
  for (let i = 0; i < s1.length; i += 1) {
    map1[s1[i]] = (map1[s1[i]] || 0) + 1;
  }
  for (let i = 0; i < s2.length; i += 1) {
    const char = s2[i];
    if (map1[char] === undefined) {
      // 如果出现 map1 中没有的字符，清空 map2，重置窗口
      count = 0;
      map2 = {};
    } else {
      if (count === 0) {
        // 记录左侧字符方便更新 map2
        leftChar = char;
      } else if (count === len) {
        // count 已经等于窗口大小
        // 减少左侧记数
        map2[leftChar] -= 1;
        // 记录左侧字符方便更新 map2
        leftChar = s2[i - count + 1];
      }
      if (count < len) {
        count += 1;
      }
      // 更新当前字符计数
      map2[char] = (map2[char] || 0) + 1;
      if (count === len) {
        // 判断是否是子串
        const isEq = Object.entries(map1).every(([key, value]) => map2[key] === value);
        if (isEq) {
          return true;
        }
      }
    }
  }
  return false;
}

export { checkInclusion };
