class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }
  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this.printlist();
  }

  travelToIndex(index) {
    let counter = 0;
    let cureenthead = this.head;
    while (counter < index) {
      cureenthead = cureenthead.next;
      counter++;
    }
    return cureenthead;
  }

  insert(index, value) {
    if (index >= this.length) return this.append(value);
    if (index === 0) return this.prepend(value);
    const newNode = new Node(value);
    const leader = this.travelToIndex(index - 1);
    const holdingPointer = leader.next;
    leader.next = newNode;
    newNode.next = holdingPointer;
    this.length++;
    return this.printlist();
  }
  // { 10, 20, 40 }

  remove(index) {
    if (index === 0) {
      this.length--;
      this.head = this.head.next;
      return this.printlist();
    }

    const leader = this.travelToIndex(index - 1);

    const unwantedNode = leader.next;
    leader.next = unwantedNode.next;
    this.length--;
    return this.printlist();
  }
  printlist() {
    const arr = [];
    let cureenthead = this.head;
    while (cureenthead) {
      arr.push(cureenthead.value);
      cureenthead = cureenthead.next;
    }
    return arr;
  }
  reverse() {
    if (!this.head.next) return this.head;

    let first = this.head;
    this.tail = this.head;
    let second = first.next;
    while (second) {
      let temp = second.next;
      //   console.log("temp ", temp);
      //   console.log(" second  ", second);
      second.next = first;
      first = second;
      //   console.log("first is ", first);
      second = temp;
      console.log("on first itreation  ", first, second, temp);
    }
    this.head.next = null;
    this.head = first;
    return this;
  }
}

const myLinkedList = new LinkedList(10);
// myLinkedList.prepend(1);
// myLinkedList.prepend(0);
myLinkedList.append(20);
myLinkedList.append(30);

// myLinkedList.insert(0, 1);
// myLinkedList.insert(3, 5);
// [ 1, 10, 20, 30 ]
// myLinkedList.remove(1);
console.log(myLinkedList.printlist());
console.log(myLinkedList.reverse());
console.log(myLinkedList.printlist());
