import { list2Nodes } from '../TreeNode';
import { mergeTrees } from './index';

it('test n617_merge_two_binary_trees', () => {
  expect(
    mergeTrees(list2Nodes([1, 3, 2, 5, null, null, null]), list2Nodes([2, 1, 3, null, 4, null, 7])),
  ).toStrictEqual(list2Nodes([3, 4, 5, 5, 4, null, 7]));
});
