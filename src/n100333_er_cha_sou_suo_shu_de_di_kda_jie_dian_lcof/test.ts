import { kthLargest } from './index';
import { list2Nodes } from '../TreeNode';

it('test n100333_er_cha_sou_suo_shu_de_di_kda_jie_dian_lcof', () => {
  expect(kthLargest(list2Nodes([3, 1, 4, null, 2]), 1)).toStrictEqual(4);
  expect(kthLargest(list2Nodes([5, 3, 6, 2, 4, null, null, 1]), 3)).toStrictEqual(4);
});
