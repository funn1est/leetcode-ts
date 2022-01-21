/// https://leetcode-cn.com/problems/peeking-iterator

class Iterator<T = number> {
  private value: T[];
  private index = 0;
  constructor(xs: T[]) {
    this.value = xs;
  }

  hasNext(): boolean {
    return this.index < this.value.length;
  }

  next(): T | null {
    if (!this.hasNext()) {
      return null;
    }
    const val = this.value[this.index];
    this.index += 1;
    return val;
  }
}

class PeekingIterator<T> {
  private iterator: Iterator<T>;
  private nextValue: T | null;
  constructor(iterator: Iterator<T>) {
    this.iterator = iterator;
    this.nextValue = this.iterator.next();
  }

  peek(): T | null {
    return this.nextValue;
  }

  next(): T | null {
    const next = this.nextValue;
    this.nextValue = this.iterator.hasNext() ? this.iterator.next() : null;
    return next;
  }

  hasNext(): boolean {
    return this.nextValue !== null;
  }
}

export { PeekingIterator, Iterator };
