/// https://leetcode-cn.com/problems/fan-zhuan-lian-biao-lcof

import ListNode from '../ListNode';

function reverseList(head: ListNode | null): ListNode | null {
  let left = null;
  let cur = head;
  while (cur) {
    const tmp = cur.next;
    cur.next = left;
    left = cur;
    cur = tmp;
  }
  return left;
}

function reverseList1(head: ListNode | null): ListNode | null {
  if (head === null || head.next === null) {
    // end
    return head;
  }

  const newHead = reverseList1(head.next);
  head.next.next = head;
  head.next = null;

  return newHead;
}

export { reverseList, reverseList1 };
