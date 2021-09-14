/// https://leetcode-cn.com/problems/li-wu-de-zui-da-jie-zhi-lcof

function maxValue(grid: number[][]): number {
  const rowLen = grid.length;
  const colLen = grid[0].length;
  for (let i = 1; i < rowLen; i += 1) {
    grid[i][0] += grid[i - 1][0];
  }
  for (let i = 1; i < colLen; i += 1) {
    grid[0][i] += grid[0][i - 1];
  }
  for (let i = 1; i < rowLen; i += 1) {
    for (let j = 1; j < colLen; j += 1) {
      grid[i][j] += Math.max(grid[i - 1][j], grid[i][j - 1]);
    }
  }
  return grid[rowLen - 1][colLen - 1];
}

function maxValue1(grid: number[][]): number {
  const rowLen = grid.length;
  const colLen = grid[0].length;
  const dp: number[][] = [[grid[0][0]]];
  for (let i = 1; i < rowLen; i += 1) {
    dp[i] = [];
    dp[i][0] = dp[i - 1][0] + grid[i][0];
  }
  for (let i = 1; i < colLen; i += 1) {
    dp[0][i] = dp[0][i - 1] + grid[0][i];
  }
  for (let i = 1; i < rowLen; i += 1) {
    for (let j = 1; j < colLen; j += 1) {
      dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]) + grid[i][j];
    }
  }
  return dp[rowLen - 1][colLen - 1];
}

export { maxValue, maxValue1 };
