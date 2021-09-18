import { pathSum } from './index';
import { list2Nodes } from '../TreeNode';

it('test n100317_er_cha_shu_zhong_he_wei_mou_yi_zhi_de_lu_jing_lcof', () => {
  expect(pathSum(list2Nodes([5, 4, 8, 11, null, 13, 4, 7, 2, null, null, 5, 1]), 22)).toStrictEqual(
    [
      [5, 4, 11, 2],
      [5, 8, 4, 5],
    ],
  );
  expect(pathSum(list2Nodes([1, 2, null]), 1)).toStrictEqual([]);
  expect(pathSum(list2Nodes([1]), 1)).toStrictEqual([[1]]);
  expect(pathSum(list2Nodes([-2, null, -3]), -5)).toStrictEqual([[-2, -3]]);
});
