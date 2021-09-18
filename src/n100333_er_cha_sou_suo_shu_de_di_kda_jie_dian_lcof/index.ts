/// https://leetcode-cn.com/problems/er-cha-sou-suo-shu-de-di-kda-jie-dian-lcof

import TreeNode from '../TreeNode';

function kthLargest(root: TreeNode | null, k: number): number {
  let count = 0;
  let res = 0;
  const dfs = (node: TreeNode | null) => {
    if (!node) {
      return;
    }
    dfs(node.right);
    count += 1;
    if (count === k) {
      res = node.val;
      return;
    }
    dfs(node.left);
  };
  dfs(root);

  return res;
}

export { kthLargest };
