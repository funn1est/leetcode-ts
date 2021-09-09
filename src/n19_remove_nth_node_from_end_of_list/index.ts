/// https://leetcode-cn.com/problems/remove-nth-node-from-end-of-list

import ListNode from '../ListNode';

/**
 * 需要使用 dummy 节点，保证删除第一个节点时结果正确
 */
function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  const dumy = new ListNode();
  dumy.next = head;
  let first: ListNode | null = dumy;
  let second: ListNode | null = dumy;
  for (let i = 0; i < n; i += 1) {
    if (second) {
      second = second.next;
    }
  }
  while (second && second.next !== null) {
    if (first) {
      first = first.next;
    }
    second = second.next;
  }
  if (first && first.next) {
    first.next = first.next.next;
  }
  return dumy.next;
}

export { removeNthFromEnd };
