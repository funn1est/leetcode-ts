/// https://leetcode-cn.com/problems/max-area-of-island

function maxAreaOfIsland(grid: number[][]): number {
  const visited: Record<string, boolean> = {};
  const rowMax = grid.length;
  const colMax = grid[0].length;
  let max = 0;

  const dfs = (row: number, col: number): number => {
    if (visited[`${row}-${col}`]) {
      return 0;
    }
    visited[`${row}-${col}`] = true;
    const val = grid[row][col];
    if (val === 0) {
      return 0;
    }
    let count = 1;
    if (row >= 1) {
      count += dfs(row - 1, col);
    }
    if (col >= 1) {
      count += dfs(row, col - 1);
    }
    if (row < rowMax - 1) {
      count += dfs(row + 1, col);
    }
    if (col < colMax - 1) {
      count += dfs(row, col + 1);
    }
    return count;
  };

  for (let i = 0; i < rowMax; i += 1) {
    for (let j = 0; j < colMax; j += 1) {
      const count = dfs(i, j);
      max = Math.max(max, count);
    }
  }

  return max;
}

export { maxAreaOfIsland };
