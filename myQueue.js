class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class MyQueue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  peek() {
    return this.first;
  }

  enqueue(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
    return this;
  }

  dequeue() {
    if (!this.first) {
      return null;
    }
    if (this.first === this.last) this.last = null;

    this.first = this.first.next;
    this.length--;
    return this;
  }
}

const queue = new MyQueue();
console.log(queue.peek());
console.log(queue.enqueue("mayur"));
console.log(queue.enqueue("ruyam"));
console.log(queue.enqueue("shre"));
console.log(queue.enqueue("sak"));

console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.peek());
