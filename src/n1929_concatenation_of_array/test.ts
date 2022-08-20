import { getConcatenation } from './index';

it('test n1929_concatenation_of_array', () => {
  expect(getConcatenation([1, 2, 1])).toStrictEqual([1, 2, 1, 1, 2, 1]);
  expect(getConcatenation([1, 3, 2, 1])).toStrictEqual([1, 3, 2, 1, 1, 3, 2, 1]);
});
