/// https://leetcode-cn.com/problems/lian-biao-zhong-dao-shu-di-kge-jie-dian-lcof

import ListNode from '../ListNode';

function getKthFromEnd(head: ListNode | null, k: number): ListNode | null {
  let dummy = new ListNode();
  dummy.next = head;
  for (let i = 0; i < k; i += 1) {
    if (head) {
      head = head.next;
    }
  }
  while (head) {
    head = head.next;
    if (dummy && dummy.next) {
      dummy = dummy.next;
    }
  }
  return dummy.next;
}

export { getKthFromEnd };
