import { CQueue } from './index';

it('test n100273_yong_liang_ge_zhan_shi_xian_dui_lie_lcof', () => {
  const cQueue1 = new CQueue();
  cQueue1.appendTail(3);
  expect(cQueue1.deleteHead()).toStrictEqual(3);
  expect(cQueue1.deleteHead()).toStrictEqual(-1);

  const cQueue2 = new CQueue();
  expect(cQueue2.deleteHead()).toStrictEqual(-1);
  cQueue2.appendTail(5);
  cQueue2.appendTail(2);
  expect(cQueue2.deleteHead()).toStrictEqual(5);
  expect(cQueue2.deleteHead()).toStrictEqual(2);
});
