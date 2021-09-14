import { fib } from './index';

it('test n100274_fei_bo_na_qi_shu_lie_lcof', () => {
  expect(fib(0)).toStrictEqual(0);
  expect(fib(1)).toStrictEqual(1);
  expect(fib(2)).toStrictEqual(1);
  expect(fib(5)).toStrictEqual(5);
});
