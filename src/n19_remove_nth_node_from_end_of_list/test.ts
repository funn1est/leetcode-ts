import { removeNthFromEnd } from './index';
import { list2Nodes } from '../ListNode';

it('test n19_remove_nth_node_from_end_of_list', () => {
  expect(removeNthFromEnd(list2Nodes([1, 2, 3, 4, 5]), 2)).toStrictEqual(list2Nodes([1, 2, 3, 5]));
  expect(removeNthFromEnd(list2Nodes([1]), 1)).toStrictEqual(list2Nodes([]));
  expect(removeNthFromEnd(list2Nodes([1, 2]), 1)).toStrictEqual(list2Nodes([1]));
  expect(removeNthFromEnd(list2Nodes([1, 2]), 2)).toStrictEqual(list2Nodes([2]));
});
