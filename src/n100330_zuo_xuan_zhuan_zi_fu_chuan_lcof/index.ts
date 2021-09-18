/// https://leetcode-cn.com/problems/zuo-xuan-zhuan-zi-fu-chuan-lcof

function reverse(str: string[], left: number, right: number) {
  const len = Math.floor((right - left) / 2);
  for (let i = 0; i <= len; i += 1) {
    const tmp = str[left + i];
    str[left + i] = str[right - i];
    str[right - i] = tmp;
  }
}

function reverseLeftWords(s: string, n: number): string {
  const str = s.split('');
  reverse(str, 0, n - 1);
  reverse(str, n, s.length - 1);
  reverse(str, 0, s.length - 1);
  return str.join('');
}

function reverseLeftWords1(s: string, n: number): string {
  return `${s.slice(n)}${s.slice(0, n)}`;
}

export { reverseLeftWords, reverseLeftWords1 };
