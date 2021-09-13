/// https://leetcode-cn.com/problems/cong-shang-dao-xia-da-yin-er-cha-shu-lcof

import TreeNode from '../TreeNode';

function levelOrder(root: TreeNode | null): number[] {
  if (!root) {
    return [];
  }
  const res: number[] = [];
  const queue: TreeNode[] = [root];
  while (queue.length > 0) {
    const node = queue.shift() as TreeNode;
    res.push(node.val);
    if (node.left) {
      queue.push(node.left);
    }
    if (node.right) {
      queue.push(node.right);
    }
  }

  return res;
}

export { levelOrder };
