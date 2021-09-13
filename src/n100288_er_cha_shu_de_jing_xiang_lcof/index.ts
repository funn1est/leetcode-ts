/// https://leetcode-cn.com/problems/er-cha-shu-de-jing-xiang-lcof

import TreeNode from '../TreeNode';

function mirrorTree(root: TreeNode | null): TreeNode | null {
  if (!root) {
    return null;
  }
  const left = mirrorTree(root.left);
  const right = mirrorTree(root.right);
  root.left = right;
  root.right = left;

  return root;
}

export { mirrorTree };
