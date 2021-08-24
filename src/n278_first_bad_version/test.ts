import { solution } from './index';

it('test n278_first_bad_version', () => {
  const isBadVersion1 = (n: number) => n >= 4;
  expect(solution(isBadVersion1)(5)).toStrictEqual(4);

  const isBadVersion2 = (n: number) => n >= 1;
  expect(solution(isBadVersion2)(1)).toStrictEqual(1);
});
