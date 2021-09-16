import { getKthFromEnd } from './index';
import { list2Nodes } from '../ListNode';

it('test n100294_lian_biao_zhong_dao_shu_di_kge_jie_dian_lcof', () => {
  expect(getKthFromEnd(list2Nodes([1, 2, 3, 4, 5]), 2)).toStrictEqual(list2Nodes([4, 5]));
  expect(getKthFromEnd(list2Nodes([1, 2, 3]), 0)).toStrictEqual(list2Nodes([]));
  expect(getKthFromEnd(list2Nodes([1, 2, 3]), 3)).toStrictEqual(list2Nodes([1, 2, 3]));
});
