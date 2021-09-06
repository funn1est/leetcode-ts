/// https://leetcode.com/problems/bao-han-minhan-shu-de-zhan-lcof

class MinStack {
  private stack: number[] = [];
  private minStack: number[] = [];

  push(x: number): void {
    this.stack.push(x);
    if (this.minStack.length) {
      this.minStack.push(Math.min(x, this.minStack[this.minStack.length - 1]));
    } else {
      this.minStack.push(x);
    }
  }

  pop(): void {
    this.stack.pop();
    this.minStack.pop();
  }

  top(): number {
    return this.stack[this.stack.length - 1];
  }

  min(): number {
    return this.minStack[this.minStack.length - 1];
  }
}

export { MinStack };
