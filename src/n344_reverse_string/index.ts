/// https://leetcode-cn.com/problems/reverse-string

/**
 Do not return anything, modify s in-place instead.
 */
function reverseString(s: string[]): void {
  const rightIdx = s.length - 1;
  const mid = Math.floor(s.length / 2);
  for (let i = 0; i < mid; i += 1) {
    let tmp = s[i];
    s[i] = s[rightIdx - i];
    s[rightIdx - i] = tmp;
  }
}

export { reverseString };
