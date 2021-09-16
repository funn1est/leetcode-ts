/// https://leetcode-cn.com/problems/liang-ge-lian-biao-de-di-yi-ge-gong-gong-jie-dian-lcof

import ListNode from '../ListNode';

function getIntersectionNode(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  if (!l1 || !l2) {
    return null;
  }
  let p1: ListNode | null = l1;
  let p2: ListNode | null = l2;
  while (p1 !== p2) {
    p1 = p1 === null ? l2 : p1.next;
    p2 = p2 === null ? l1 : p2.next;
  }
  return p1;
}

export { getIntersectionNode };
