import { middleNode } from './index';
import { list2Nodes } from '../ListNode';

it('test n876_middle_of_the_linked_list', () => {
  const raw1 = list2Nodes([1, 2, 3, 4, 5]);
  expect(middleNode(raw1)).toStrictEqual(list2Nodes([3, 4, 5]));

  const raw2 = list2Nodes([1, 2, 3, 4, 5, 6]);
  expect(middleNode(raw2)).toStrictEqual(list2Nodes([4, 5, 6]));
});
