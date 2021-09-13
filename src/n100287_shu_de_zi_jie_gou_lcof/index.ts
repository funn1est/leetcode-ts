/// https://leetcode-cn.com/problems/shu-de-zi-jie-gou-lcof

import TreeNode from '../TreeNode';

function isTree1HasTree2(A: TreeNode | null, B: TreeNode | null): boolean {
  if (B === null) {
    return true;
  }
  if (A === null) {
    return false;
  }
  if (A.val !== B.val) {
    return false;
  }
  return isTree1HasTree2(A.left, B.left) && isTree1HasTree2(A.right, B.right);
}

function isSubStructure(A: TreeNode | null, B: TreeNode | null): boolean {
  if (A === null || B === null) {
    return false;
  }
  return isTree1HasTree2(A, B) || isSubStructure(A.left, B) || isSubStructure(A.right, B);
}

export { isSubStructure };
