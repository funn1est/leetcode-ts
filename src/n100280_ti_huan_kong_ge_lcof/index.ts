/// https://leetcode.com/problems/ti-huan-kong-ge-lcof

function replaceSpace(s: string): string {
  const xs = s.split('');
  const len = xs.length;
  let newLen = 0;
  for (let i = 0; i < len; i += 1) {
    if (xs[i] === ' ') {
      newLen += 2;
    }
  }
  newLen = len + newLen;

  let i = len - 1;
  let j = newLen - 1;
  while (i >= 0 && j > i) {
    if (xs[i] === ' ') {
      xs[j] = '0';
      xs[j - 1] = '2';
      xs[j - 2] = '%';
      j -= 3;
    } else {
      xs[j] = xs[i];
      j -= 1;
    }
    i -= 1;
  }

  return xs.join('');
}

export { replaceSpace };
