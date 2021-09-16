/// https://leetcode-cn.com/problems/fan-zhuan-dan-ci-shun-xu-lcof

function reverseWords(s: string): string {
  const xs: string[] = [];
  let i = s.length - 1;
  let j = s.length - 1;
  while (j >= 0) {
    while (j >= 0 && s[j] === ' ') {
      j -= 1;
    }
    if (j < 0) {
      break;
    }
    i = j;
    while (i > 0 && s[i - 1] !== ' ') {
      i -= 1;
    }
    xs.push(s.slice(i, j + 1));
    j = i - 1;
  }

  return xs.join(' ');
}

export { reverseWords };
