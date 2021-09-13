/// https://leetcode-cn.com/problems/cong-shang-dao-xia-da-yin-er-cha-shu-iii-lcof

import TreeNode from '../TreeNode';

function levelOrder(root: TreeNode | null): number[][] {
  if (!root) {
    return [];
  }

  const res: number[][] = [];
  const queue: TreeNode[] = [root];
  let isLeft = true;
  while (queue.length) {
    const inner: number[] = [];
    const len = queue.length;
    for (let i = 0; i < len; i += 1) {
      const node = (isLeft ? queue.shift() : queue.pop()) as TreeNode;
      inner.push(node.val);
      const stack: TreeNode[] = [];
      if (node.left) {
        stack.push(node.left);
      }
      if (node.right) {
        stack.push(node.right);
      }
      isLeft ? queue.push(...stack) : queue.unshift(...stack);
    }
    res.push(inner);
    isLeft = !isLeft;
  }

  return res;
}

export { levelOrder };
