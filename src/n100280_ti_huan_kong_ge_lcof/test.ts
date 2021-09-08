import { replaceSpace } from './index';

it('test n100280_ti_huan_kong_ge_lcof', () => {
  expect(replaceSpace('We are happy.')).toStrictEqual('We%20are%20happy.');
});
