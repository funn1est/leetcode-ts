class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

export const list2Nodes = (xs: (number | null)[]): TreeNode => {
  const queue: TreeNode[] = [];
  const val = xs.shift();
  const root = new TreeNode(val !== null ? val : undefined);
  queue.push(root);
  while (xs.length && queue.length) {
    const node = queue.shift() as TreeNode;
    const leftVal = xs.shift();
    if (leftVal !== null) {
      const leftNode = new TreeNode(leftVal);
      node.left = leftNode;
      queue.push(leftNode);
    }
    const rightVal = xs.shift();
    if (rightVal !== null) {
      const rigthNode = new TreeNode(rightVal);
      node.right = rigthNode;
      queue.push(rigthNode);
    }
  }

  return root;
};

export const nodes2List = (root: TreeNode): (number | null)[] => {
  const xs: (number | null)[] = [];
  const queue: (TreeNode | null)[] = [root];
  while (queue.length) {
    const node = queue.shift() as TreeNode;
    if (node === null) {
      xs.push(null);
    } else {
      xs.push(node.val);
      queue.push(node.left);
      queue.push(node.right);
    }
  }

  return xs;
};

export default TreeNode;
