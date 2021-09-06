import { reversePrint } from './index';
import { list2Nodes } from '../ListNode';

it('test n100282_cong_wei_dao_tou_da_yin_lian_biao_lcof', () => {
  expect(reversePrint(list2Nodes([1, 3, 2]))).toStrictEqual([2, 3, 1]);
  expect(reversePrint(list2Nodes([]))).toStrictEqual([]);
});
