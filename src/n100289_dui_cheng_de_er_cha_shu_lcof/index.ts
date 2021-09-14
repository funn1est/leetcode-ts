/// https://leetcode-cn.com/problems/dui-cheng-de-er-cha-shu-lcof

import TreeNode from '../TreeNode';

function isMirrorTree(a: TreeNode | null, b: TreeNode | null): boolean {
  if (a === null && b === null) {
    return true;
  }
  if (!a || !b) {
    return false;
  }
  if (a.val !== b.val) {
    return false;
  }
  return isMirrorTree(a.left, b.right) && isMirrorTree(a.right, b.left);
}

function isSymmetric(root: TreeNode | null): boolean {
  if (root === null) {
    return true;
  }

  return isMirrorTree(root.left, root.right);
}

export { isSymmetric };
