/// https://leetcode-cn.com/problems/xuan-zhuan-shu-zu-de-zui-xiao-shu-zi-lcof

function minArray(numbers: number[]): number {
  let i = 0;
  let j = numbers.length - 1;
  while (i < j) {
    const mid = i + Math.floor((j - i) / 2);
    if (numbers[mid] > numbers[j]) {
      i = mid + 1;
    } else if (numbers[mid] < numbers[j]) {
      j = mid;
    } else {
      j -= 1;
    }
  }

  return numbers[i];
}

function minArray1(numbers: number[]): number {
  for (let i = 0; i < numbers.length - 1; i += 1) {
    if (numbers[i] > numbers[i + 1]) {
      return numbers[i + 1];
    }
  }
  return numbers[0];
}

export { minArray, minArray1 };
