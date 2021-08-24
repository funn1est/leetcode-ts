/// https://leetcode-cn.com/problems/first-bad-version/

const solution = (isBadVersion: (version: number) => boolean) => {
  return (n: number): number => {
    let left = 1;
    let right = n;
    while (left < right) {
      const pivot = left + Math.floor((right - left) / 2);
      if (isBadVersion(pivot)) {
        right = pivot;
      } else {
        left = pivot + 1;
      }
    }
    return left;
  };
};

export { solution };
