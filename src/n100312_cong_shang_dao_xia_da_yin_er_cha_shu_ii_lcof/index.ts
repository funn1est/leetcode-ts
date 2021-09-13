/// https://leetcode-cn.com/problems/cong-shang-dao-xia-da-yin-er-cha-shu-ii-lcof

import TreeNode from '../TreeNode';

function levelOrder(root: TreeNode | null): number[][] {
  if (!root) {
    return [];
  }

  const res: number[][] = [];
  const queue: TreeNode[] = [root];
  while (queue.length > 0) {
    const inner: number[] = [];
    const len = queue.length;
    for (let i = 0; i < len; i += 1) {
      const node = queue.shift() as TreeNode;
      inner.push(node.val);
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
    res.push(inner);
  }

  return res;
}

export { levelOrder };
