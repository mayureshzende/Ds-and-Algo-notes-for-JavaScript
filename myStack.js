class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  //peek -> to look at the first item
  peek() {
    return this.top;
  }

  //push -> adding the item to the top of the stack
  push(item) {
    const newNode = new Node(item);
    // console.log(newNode);
    if (this.length === 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      const holdingPointer = this.top;
      newNode.next = holdingPointer;
      this.top = newNode;
    }
    this.length++;
    return this;
  }

  //pop -> removing the item from the top of the stack
  pop() {
    if (!this.top) return null;
    if (this.top === this.bottom) {
      this.bottom = null;
    }
    // this is will be collected as a garbage value, so to keep reference we are holding it
    // const holdingPointer = this.top;
    this.top = this.top.next;
    this.length--;
    return this;
  }

  // isEmpty to check if the stack is empty
}

const mystack = new Stack();
// console.log(mystack.peek());

mystack.push("google");
console.log(mystack.push("UDEMY"));
// console.log(mystack.peek());
console.log(mystack.pop());
console.log(mystack.pop());
console.log(mystack.pop());
// console.log(mystack.peek());
