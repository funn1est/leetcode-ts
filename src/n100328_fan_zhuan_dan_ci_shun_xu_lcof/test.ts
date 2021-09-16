import { reverseWords } from './index';

it('test n100328_fan_zhuan_dan_ci_shun_xu_lcof', () => {
  expect(reverseWords('the sky is blue')).toStrictEqual('blue is sky the');
  expect(reverseWords('  hello world!  ')).toStrictEqual('world! hello');
  expect(reverseWords('a good   example')).toStrictEqual('example good a');
});
