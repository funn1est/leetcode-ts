import { mergeTwoLists } from './index';
import { list2Nodes } from '../ListNode';

it('test n100286_he_bing_liang_ge_pai_xu_de_lian_biao_lcof', () => {
  expect(mergeTwoLists(list2Nodes([1, 2, 4]), list2Nodes([1, 3, 4]))).toStrictEqual(
    list2Nodes([1, 1, 2, 3, 4, 4]),
  );
});
