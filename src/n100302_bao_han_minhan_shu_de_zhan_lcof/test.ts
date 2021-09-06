import { MinStack } from './index';

it('test n100302_bao_han_minhan_shu_de_zhan_lcof', () => {
  const minStack = new MinStack();
  minStack.push(-2);
  minStack.push(0);
  minStack.push(-3);
  expect(minStack.min()).toStrictEqual(-3);
  minStack.pop();
  expect(minStack.top()).toStrictEqual(0);
  expect(minStack.min()).toStrictEqual(-2);
});
