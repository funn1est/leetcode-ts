/// https://leetcode-cn.com/problems/boats-to-save-people/

function numRescueBoats(people: number[], limit: number): number {
  let count = 0;
  let left = 0;
  let right = people.length - 1;
  people.sort((a, b) => a - b);

  while (left < right) {
    const sum = people[left] + people[right];
    count += 1;
    right -= 1;
    if (sum <= limit) {
      left += 1;
    }
  }
  if (left === right) {
    count += 1;
  }
  return count;
}

export { numRescueBoats };
