import { reverseLeftWords, reverseLeftWords1 } from './index';
import { testFns } from '../utils';

it('test n100330_zuo_xuan_zhuan_zi_fu_chuan_lcof', () => {
  testFns([reverseLeftWords, reverseLeftWords1], (fn) => {
    expect(fn('abcdefg', 2)).toStrictEqual('cdefgab');
    expect(fn('lrloseumgh', 6)).toStrictEqual('umghlrlose');
  });
});
