/// https://leetcode-cn.com/problems/shan-chu-lian-biao-de-jie-dian-lcof

import ListNode from '../ListNode';

function deleteNode(head: ListNode | null, val: number): ListNode | null {
  const dummy = new ListNode();
  dummy.next = head;
  let pre = dummy;
  while (pre.next) {
    if (pre.next.val === val) {
      pre.next = pre.next.next;
      break;
    }
    pre = pre.next;
  }

  return dummy.next;
}

export { deleteNode };
