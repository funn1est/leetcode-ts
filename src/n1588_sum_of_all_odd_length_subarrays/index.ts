/// https://leetcode.com/problems/sum-of-all-odd-length-subarrays

function sumOddLengthSubarrays(arr: number[]): number {
  const sum = [arr[0]];
  let res = 0;
  let left = 0;
  let right = 0;

  for (let i = 1; i < arr.length; i += 1) {
    sum[i] = sum[i - 1] + arr[i];
  }

  while (left < arr.length) {
    right = left;
    while (right < arr.length) {
      if ((right - left + 1) % 2 === 1) {
        res += sum[right] - sum[left] + arr[left];
      }
      right += 1;
    }

    left += 1;
  }

  return res;
}

export { sumOddLengthSubarrays };
