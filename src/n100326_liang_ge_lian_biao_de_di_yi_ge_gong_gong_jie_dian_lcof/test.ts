import { getIntersectionNode } from './index';
import ListNode, { list2Nodes } from '../ListNode';

const getLast = (node: ListNode): ListNode => {
  while (node.next) {
    node = node.next;
  }
  return node;
};

it('test n100326_liang_ge_lian_biao_de_di_yi_ge_gong_gong_jie_dian_lcof', () => {
  const a1 = list2Nodes([4, 1]);
  const a2 = list2Nodes([5, 0, 1]);
  const aa = list2Nodes([8, 4, 5]);
  getLast(a1).next = aa;
  getLast(a2).next = aa;
  expect(getIntersectionNode(a1, a2)).toStrictEqual(aa);

  const b1 = list2Nodes([0, 9, 1]);
  const b2 = list2Nodes([3]);
  const bb = list2Nodes([2, 4]);
  getLast(b1).next = bb;
  getLast(b2).next = bb;
  expect(getIntersectionNode(b1, b2)).toStrictEqual(bb);

  const c1 = list2Nodes([2, 6, 4]);
  const c2 = list2Nodes([1, 5]);
  expect(getIntersectionNode(c1, c2)).toStrictEqual(null);
});
