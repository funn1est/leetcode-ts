/// https://leetcode.com/problems/cong-wei-dao-tou-da-yin-lian-biao-lcof

import ListNode from '../ListNode';

function reversePrint(head: ListNode | null): number[] {
  const xs: number[] = [];
  const res: number[] = [];
  let dumy = head;
  while (dumy) {
    xs.push(dumy.val);
    dumy = dumy.next;
  }
  while (xs.length > 0) {
    res.push(xs.pop() as number);
  }

  return res;
}

export { reversePrint };
