/// https://leetcode-cn.com/problems/nim-game

function canWinNim(n: number): boolean {
  return n % 4 !== 0;
}

export { canWinNim };
