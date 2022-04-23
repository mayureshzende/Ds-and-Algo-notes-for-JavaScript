class ArrayMethods {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  //adding item to the array
  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.data;
  }

  //deleting the item from the array
  pop() {
    const item = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return item;
  }
  // get item at the index
  get(index) {
    if (index <= this.length) {
      return this.data[index];
    }
    return undefined;
  }

  // delete at the index and shift the array
  delete(index) {
    if (index > this.length) return "out of the array range";
    let item = this.data[index];
    delete this.data[index];
    this.shiftItem(index);
    this.length--;
    return item;
  }

  shiftItem(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
  }
}

const myArray = new ArrayMethods();
console.log(myArray.push(1));
console.log(myArray.push(2));
console.log(myArray.push(3));
console.log(myArray.push(4));
console.log(myArray.push(5));
// console.log(myArray.pop());
// console.log(myArray.pop());
console.log(myArray.get(3));
console.log(myArray.delete(4));
console.log(myArray);
