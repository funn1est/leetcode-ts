import { movingCount } from './index';

it('test n100281_ji_qi_ren_de_yun_dong_fan_wei_lcof', () => {
  expect(movingCount(2, 3, 1)).toStrictEqual(3);
  expect(movingCount(3, 1, 0)).toStrictEqual(1);
});
