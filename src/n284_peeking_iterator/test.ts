import { PeekingIterator, Iterator } from './index';

it('test n284_peeking_iterator', () => {
  const it = new Iterator([1, 2, 3]);
  const pi = new PeekingIterator(it);
  expect(pi.next()).toStrictEqual(1);
  expect(pi.peek()).toStrictEqual(2);
  expect(pi.next()).toStrictEqual(2);
  expect(pi.hasNext()).toStrictEqual(true);
  expect(pi.next()).toStrictEqual(3);
  expect(pi.hasNext()).toStrictEqual(false);
});
