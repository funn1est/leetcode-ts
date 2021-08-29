class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export const list2Nodes = (xs: number[]): ListNode => {
  const head = new ListNode();
  let cur = head;
  xs.forEach((val) => {
    const node = new ListNode(val);
    cur.next = node;
    cur = cur.next;
  });
  return head.next as ListNode;
};

export const nodes2List = (node: ListNode | null): number[] => {
  const res = [];
  let cur = node;
  while (cur) {
    res.push(cur.val);
    cur = cur.next;
  }
  return res;
};

export default ListNode;
