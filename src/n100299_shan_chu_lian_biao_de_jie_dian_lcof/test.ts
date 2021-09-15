import { deleteNode } from './index';
import { list2Nodes } from '../ListNode';

it('test n100299_shan_chu_lian_biao_de_jie_dian_lcof', () => {
  expect(deleteNode(list2Nodes([4, 5, 1, 9]), 5)).toStrictEqual(list2Nodes([4, 1, 9]));
  expect(deleteNode(list2Nodes([4, 5, 1, 9]), 1)).toStrictEqual(list2Nodes([4, 5, 9]));
  expect(deleteNode(list2Nodes([1]), 1)).toStrictEqual(list2Nodes([]));
  expect(deleteNode(list2Nodes([1, 2]), 1)).toStrictEqual(list2Nodes([2]));
  expect(deleteNode(list2Nodes([1, 2]), 2)).toStrictEqual(list2Nodes([1]));
});
