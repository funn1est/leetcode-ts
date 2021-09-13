import { levelOrder } from './index';
import { list2Nodes } from '../TreeNode';

it('test n100314_cong_shang_dao_xia_da_yin_er_cha_shu_iii_lcof', () => {
  expect(levelOrder(list2Nodes([3, 9, 20, null, null, 15, 7]))).toStrictEqual([
    [3],
    [20, 9],
    [15, 7],
  ]);
  expect(levelOrder(list2Nodes([1, 2, 3, 4, null, null, 5]))).toStrictEqual([[1], [3, 2], [4, 5]]);
});
