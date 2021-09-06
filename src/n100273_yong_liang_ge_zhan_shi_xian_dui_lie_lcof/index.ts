/// https://leetcode.com/problems/yong-liang-ge-zhan-shi-xian-dui-lie-lcof

class CQueue {
  private stack1: number[] = [];
  private stack2: number[] = [];

  appendTail(value: number): void {
    this.stack1.push(value);
  }

  deleteHead(): number {
    if (this.stack2.length) {
      return this.stack2.pop() as number;
    }

    if (this.stack1.length) {
      while (this.stack1.length) {
        this.stack2.push(this.stack1.pop() as number);
      }
      return this.stack2.pop() as number;
    }
    return -1;
  }
}

/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */

export { CQueue };
