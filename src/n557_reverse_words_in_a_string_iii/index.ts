/// https://leetcode-cn.com/problems/reverse-words-in-a-string-iii

function reverseWords(s: string): string {
  let left = 0;
  let right = 0;
  let idx = 0;
  const xs = s.split('');
  while (idx < s.length) {
    while (idx !== s.length && xs[idx] !== ' ') {
      idx += 1;
    }
    right = idx - 1;
    while (left < right) {
      const tmp = xs[left];
      xs[left] = xs[right];
      xs[right] = tmp;
      left += 1;
      right -= 1;
    }
    left = idx + 1;
    right = left;
    idx = left;
  }
  return xs.join('');
}

export { reverseWords };
