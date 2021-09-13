import { isSubStructure } from './index';
import { list2Nodes } from '../TreeNode';

it('test n100287_shu_de_zi_jie_gou_lcof', () => {
  expect(isSubStructure(list2Nodes([1, 2, 3]), list2Nodes([3, 1, null]))).toStrictEqual(false);
  expect(
    isSubStructure(list2Nodes([3, 4, 5, 1, 2, null, null]), list2Nodes([4, 1, null])),
  ).toStrictEqual(true);
});
