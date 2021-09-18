/// https://leetcode-cn.com/problems/er-cha-shu-zhong-he-wei-mou-yi-zhi-de-lu-jing-lcof

import TreeNode from '../TreeNode';

function pathSum(root: TreeNode | null, target: number): number[][] {
  const res: number[][] = [];

  const dfs = (node: TreeNode | null, paths: number[], sum: number) => {
    if (!node) {
      return;
    }
    const newSum = sum + node.val;
    const newPaths = paths.concat(node.val);
    if (newSum === target && !node.left && !node.right) {
      res.push(newPaths);
      return;
    }
    dfs(node.left, newPaths, newSum);
    dfs(node.right, newPaths, newSum);
  };

  dfs(root, [], 0);

  return res;
}

export { pathSum };
