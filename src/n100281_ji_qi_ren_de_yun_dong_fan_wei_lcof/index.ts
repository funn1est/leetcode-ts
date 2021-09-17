/// https://leetcode-cn.com/problems/ji-qi-ren-de-yun-dong-fan-wei-lcof

function isMovable(i: number, j: number, target: number): boolean {
  let sum = 0;
  while (i) {
    sum += i % 10;
    i = Math.floor(i / 10);
  }
  while (j) {
    sum += j % 10;
    j = Math.floor(j / 10);
  }
  return sum <= target;
}

function movingCount(m: number, n: number, k: number): number {
  let count = 0;
  const visited: Record<string, boolean> = {};

  const dfs = (i: number, j: number) => {
    if (i >= m || j >= n || visited[`${i}-${j}`]) {
      return;
    }
    visited[`${i}-${j}`] = true;
    if (isMovable(i, j, k)) {
      count += 1;
    } else {
      return;
    }
    dfs(i + 1, j);
    dfs(i, j + 1);
  };
  dfs(0, 0);
  return count;
}

export { movingCount };
