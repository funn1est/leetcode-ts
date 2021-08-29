/// https://leetcode.com/problems/flood-fill

function floodFill(image: number[][], sr: number, sc: number, newColor: number): number[][] {
  const visited: Record<string, boolean> = {};
  const target = image[sr][sc];
  const rowLen = image.length;
  const colLen = image[0].length;
  const dfs = (row: number, col: number) => {
    if (image[row][col] === target && !visited[`${row}-${col}`]) {
      visited[`${row}-${col}`] = true;
      image[row][col] = newColor;
      if (row >= 1) {
        dfs(row - 1, col);
      }
      if (col >= 1) {
        dfs(row, col - 1);
      }
      if (row < rowLen - 1) {
        dfs(row + 1, col);
      }
      if (col < colLen - 1) {
        dfs(row, col + 1);
      }
    }
  };
  dfs(sr, sc);

  return image;
}

export { floodFill };
