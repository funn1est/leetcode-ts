import { mirrorTree } from './index';
import { list2Nodes } from '../TreeNode';

it('test n100288_er_cha_shu_de_jing_xiang_lcof', () => {
  expect(mirrorTree(list2Nodes([4, 2, 7, 1, 3, 6, 9]))).toStrictEqual(
    list2Nodes([4, 7, 2, 9, 6, 3, 1]),
  );
  expect(mirrorTree(list2Nodes([4, 2, 7, 1, 3, 6, null]))).toStrictEqual(
    list2Nodes([4, 7, 2, null, 6, 3, 1]),
  );
});
