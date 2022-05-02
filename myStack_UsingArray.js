class Mystack {
  constructor() {
    this.data = [];
    // this.length = 0;
  }

  //peek
  peek() {
    // if (this.length === 0) return null;
    return this.data[this.data.length - 1];
  }

  //push
  push(item) {
    this.data.push(item);
    // this.length++;
    return this.data; //.reverse();
  }

  //pop
  pop() {
    if (this.length === 0) return null;
    // delete this.data[0];
    // this.length--;
    this.data.pop();
    return this.data; // .push.reverse();
  }
}

const stack = new Mystack();
console.log(stack.peek());
console.log(stack.push("google"));
console.log(stack.push("udemy"));
console.log(stack.pop());
