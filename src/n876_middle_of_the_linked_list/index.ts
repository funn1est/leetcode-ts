/// https://leetcode-cn.com/problems/middle-of-the-linked-list

import ListNode from '../ListNode';

function middleNode(head: ListNode | null): ListNode | null {
  let n = 0;
  let cur = head;
  while (cur !== null) {
    n += 1;
    cur = cur.next;
  }

  const mid = Math.floor(n / 2);
  cur = head;
  n = 0;
  while (n < mid) {
    if (cur) {
      cur = cur.next;
    }
    n += 1;
  }

  return cur;
}

export { middleNode };
