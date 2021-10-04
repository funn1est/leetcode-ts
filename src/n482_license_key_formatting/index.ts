/// https://leetcode-cn.com/problems/license-key-formatting

function licenseKeyFormatting(s: string, k: number): string {
  const xs = s.split('');
  let res = '';
  let count = 0;
  for (let i = xs.length - 1; i >= 0; i -= 1) {
    const char = xs[i];
    if (char !== '-') {
      if (count === k) {
        res = `-${res}`;
        count = 0;
      }
      res = `${char.toUpperCase()}${res}`;
      count += 1;
    }
  }
  return res;
}

export { licenseKeyFormatting };
