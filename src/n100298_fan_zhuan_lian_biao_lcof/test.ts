import { reverseList, reverseList1 } from './index';
import { list2Nodes } from '../ListNode';

it('test n100298_fan_zhuan_lian_biao_lcof', () => {
  expect(reverseList(list2Nodes([1, 2, 3, 4, 5]))).toStrictEqual(list2Nodes([5, 4, 3, 2, 1]));
  expect(reverseList(list2Nodes([]))).toStrictEqual(list2Nodes([]));
  expect(reverseList(list2Nodes([1]))).toStrictEqual(list2Nodes([1]));

  expect(reverseList1(list2Nodes([1, 2, 3, 4, 5]))).toStrictEqual(list2Nodes([5, 4, 3, 2, 1]));
  expect(reverseList1(list2Nodes([]))).toStrictEqual(list2Nodes([]));
  expect(reverseList1(list2Nodes([1]))).toStrictEqual(list2Nodes([1]));
});
