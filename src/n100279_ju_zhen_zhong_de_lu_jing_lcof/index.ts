/// https://leetcode-cn.com/problems/ju-zhen-zhong-de-lu-jing-lcof

function exist(board: string[][], word: string): boolean {
  const rowLen = board.length;
  const colLen = board[0].length;

  const dfs = (i: number, j: number, idx: number): boolean => {
    if (i >= rowLen || i < 0 || j >= colLen || j < 0 || board[i][j] !== word[idx]) {
      return false;
    }
    if (idx === word.length - 1) {
      // board[i][j] === word[idx]
      return true;
    }
    board[i][j] = '\0';
    const nextIdx = idx + 1;
    const hasPath =
      dfs(i + 1, j, nextIdx) ||
      dfs(i - 1, j, nextIdx) ||
      dfs(i, j + 1, nextIdx) ||
      dfs(i, j - 1, nextIdx);
    board[i][j] = word[idx];
    return hasPath;
  };

  for (let i = 0; i < rowLen; i += 1) {
    for (let j = 0; j < colLen; j += 1) {
      if (dfs(i, j, 0)) {
        return true;
      }
    }
  }
  return false;
}

export { exist };
