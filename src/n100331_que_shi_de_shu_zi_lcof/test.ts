import { missingNumber } from './index';

it('test n100331_que_shi_de_shu_zi_lcof', () => {
  expect(missingNumber([0])).toStrictEqual(1);
  expect(missingNumber([0, 1, 3])).toStrictEqual(2);
  expect(missingNumber([1, 2, 3])).toStrictEqual(0);
  expect(missingNumber([0, 1, 2, 3, 4, 5, 6, 7, 9])).toStrictEqual(8);
});
