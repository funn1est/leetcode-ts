import { isSymmetric } from './index';
import { list2Nodes } from '../TreeNode';

it('test n100289_dui_cheng_de_er_cha_shu_lcof', () => {
  expect(isSymmetric(list2Nodes([1, 2, 2, 3, 4, 4, 3]))).toStrictEqual(true);
  expect(isSymmetric(list2Nodes([1, 2, 2, null, 3, null, 3]))).toStrictEqual(false);
});
