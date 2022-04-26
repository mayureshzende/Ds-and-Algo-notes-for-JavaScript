class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkeList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
      prev: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value);
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this.printList();
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
    this.length++;
    return this.length;
  }
  // [10, 20, 40]
  insert(index, value) {
    if (index === 0) return this.prepend(value);
    if (index >= this.length) return this.append(value);
    const newNode = new Node(value);
    const leader = this.travelToIndex(index - 1);
    const follower = leader.next;
    leader.next = newNode;
    newNode.prev = leader;
    newNode.next = follower;
    follower.prev = newNode;
    this.length++;
    return this.length;
  }
  // [ 10, 20, 30 ]
  remove(index) {
    if (index >= this.length || index <= -1) return undefined;
    if (index === 0) {
      this.head = this.head.next;
      this.head.prev = null;
      this.length--;
      return this.head;
    }
    const leader = this.travelToIndex(index - 1);
    // console.log(leader);
    const follwer = leader.next;
    follwer.prev.next = leader.next;
    leader.next = follwer.next;
    // console.log(follwer);

    this.length--;
    return this.length;
  }
  travelToIndex(index) {
    let counter = 0;
    let current = this.head;
    while (counter < index) {
      current = current.next;
      counter++;
    }
    return current;
  }

  printList() {
    const arr = [];
    let currentHead = this.head;
    while (currentHead) {
      arr.push(currentHead.value);
      currentHead = currentHead.next;
    }
    return arr;
  }
}

const myDoublyLinkedList = new DoublyLinkeList(10);
myDoublyLinkedList.append(20);
myDoublyLinkedList.append(30);
myDoublyLinkedList.append(40);

// myDoublyLinkedList.prepend(9);
// myDoublyLinkedList.prepend(5);
// myDoublyLinkedList.insert(2, 25);
// myDoublyLinkedList.remove(0);
// console.log(myDoublyLinkedList.remove(4));
console.log(myDoublyLinkedList.remove(1));
// console.log(myDoublyLinkedList.printList());
console.log(myDoublyLinkedList);
