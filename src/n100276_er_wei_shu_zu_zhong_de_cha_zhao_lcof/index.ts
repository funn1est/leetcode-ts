/// https://leetcode-cn.com/problems/er-wei-shu-zu-zhong-de-cha-zhao-lcof

function findNumberIn2DArray(matrix: number[][], target: number): boolean {
  if (!matrix[0]) {
    return false;
  }
  const rowLen = matrix.length;
  const colLen = matrix[0].length;
  let i = 0;
  let j = colLen - 1;
  while (i < rowLen && j >= 0) {
    const num = matrix[i][j];
    if (num === target) {
      return true;
    }
    if (num > target) {
      j -= 1;
    } else {
      i += 1;
    }
  }
  return false;
}

export { findNumberIn2DArray };
