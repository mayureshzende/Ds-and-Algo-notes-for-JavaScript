class QueueSt {
  constructor() {
    this.input = [];
    this.output = [];
  }
  enqueue(value) {
    return this.input.push(value);
  }

  dequeue() {
    let length = this.input.length;
    if (!this.output.length) {
      for (let i = 0; i < length; i++) {
        this.output.push(this.input.pop());
      }
    }
    return this.output.pop();
  }

  peek() {
    let length = this.input.length;
    if (this.output.length > 0) {
      return this.output[this.output.length - 1];
    } else {
      for (let i = 0; i < length; i++) {
        this.output.push(this.input.pop());
      }
      return this.output[this.output.length - 1];
    }
  }
}

const y = new QueueSt();
y.enqueue("1");
y.enqueue("2");
y.enqueue("3");
y.dequeue();
y.dequeue();
y.enqueue("1");
// y.dequeue();
console.log(y.peek());
console.log(y);
// console.log(y.peek());
// console.log(y.dequeue());
// console.log(y.dequeue());
console.log(y);

class QueueUsingStack {
  constructor() {
    this.s1 = [];
    this.s2 = [];
    // this.length = 0;
  }
  enqueue(value) {
    let length = this.s1.length;
    for (let i = 0; i < length; i++) {
      this.s2.push(this.s1.pop());
    }
    this.s2.push(value);
    return this;
  }

  dequeue() {
    let length = this.s2.length;
    if (this.s2.length === 0) {
      for (let i = 0; i < length; i++) {
        this.s1.push(this.s2.pop());
      }
    }
    this.s1.pop();
    return this.S2;
  }

  peek() {
    if (this.s1.length > 0) {
      return this.s1[this.s1.length - 1];
    }
    return this.s2[0];
  }

  isEmpty() {
    return this.first.length === 0;
  }
}

// const myQueue = new QueueUsingStack();
// myQueue.peek();
// myQueue.enqueue("1");
// myQueue.enqueue("2");
// myQueue.enqueue("3");
// console.log(myQueue.peek());
// myQueue.peek();
// myQueue.dequeue();
// myQueue.dequeue();
// console.log(myQueue.peek());
// console.log(myQueue);
// myQueue.dequeue();
// // myQueue.peek();
// console.log(myQueue.peek());

class CrazyQueue {
  constructor() {
    this.first = [];
    this.last = [];
  }

  enqueue(value) {
    const length = this.first.length;
    for (let i = 0; i < length; i++) {
      this.last.push(this.first.pop());
    }
    this.last.push(value);
    return this;
  }

  dequeue() {
    const length = this.last.length;
    for (let i = 0; i < length; i++) {
      this.first.push(this.last.pop());
    }
    this.first.pop();
    return this;
  }
  peek() {
    if (this.last.length > 0) {
      return this.last[0];
    }
    return this.first[this.first.length - 1];
  }
}
