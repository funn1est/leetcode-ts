import { checkInclusion } from './index';

it('test n567_permutation_in_string', () => {
  expect(checkInclusion('ab', 'eidbaooo')).toStrictEqual(true);
  expect(checkInclusion('ab', 'eidboaoo')).toStrictEqual(false);
});
