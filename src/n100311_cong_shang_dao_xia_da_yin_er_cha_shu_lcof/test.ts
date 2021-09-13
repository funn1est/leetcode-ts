import { levelOrder } from './index';
import { list2Nodes } from '../TreeNode';

it('test n100311_cong_shang_dao_xia_da_yin_er_cha_shu_lcof', () => {
  expect(levelOrder(list2Nodes([3, 9, 20, null, null, 15, 7]))).toStrictEqual([3, 9, 20, 15, 7]);
  expect(levelOrder(null)).toStrictEqual([]);
});
