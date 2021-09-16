/// https://leetcode-cn.com/problems/he-bing-liang-ge-pai-xu-de-lian-biao-lcof

import ListNode from '../ListNode';

function mergeTwoLists(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  const dummy = new ListNode();
  let head = dummy;
  while (l1 || l2) {
    if ((l1 && l2 && l1.val <= l2.val) || (l1 && !l2)) {
      head.next = l1;
      l1 = l1.next;
    } else {
      head.next = l2!;
      l2 = l2!.next;
    }
    head = head.next;
  }

  return dummy.next;
}

export { mergeTwoLists };
