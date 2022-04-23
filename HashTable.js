class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }
  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  set(key, value) {
    let address = this._hash(key);
    if (!this.data[address]) this.data[address] = [];
    this.data[address].push([key, value]);
    return this.data;
  }

  get(key) {
    let address = this._hash(key);
    let currentBuket = this.data[address];
    if (currentBuket) {
      for (let i = 0; i < currentBuket.length; i++) {
        if (currentBuket[i][0] === key) return currentBuket[i][1];
      }
      return undefined;
    }
  }

  keys() {
    const keyArr = [];
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        if (this.data[i].length > 1) {
          for (let j = 0; j < this.data[i].length; j++) {
            keyArr.push(this.data[i][j][0]);
          }
        } else {
          keyArr.push(this.data[i][0][0]);
        }
      }
    }
    return keyArr;
  }
}

const myHashTable = new HashTable(20);
myHashTable.set("apple", 20);
myHashTable.set("grapes", 10);
myHashTable.set("grapes", 1);
myHashTable.set("kiwi", "1");
console.log(myHashTable.get("apple"));
// console.log(myHashTable.data);
console.log(myHashTable.keys());
