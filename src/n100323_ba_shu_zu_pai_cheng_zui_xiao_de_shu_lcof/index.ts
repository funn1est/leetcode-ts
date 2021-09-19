/// https://leetcode-cn.com/problems/ba-shu-zu-pai-cheng-zui-xiao-de-shu-lcof

function minNumber(nums: number[]): string {
  nums.sort((a, b) => (`${a}${b}` >= `${b}${a}` ? 1 : -1));
  return nums.join('');
}

export { minNumber };
