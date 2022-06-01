function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BreadthFirstSearch {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    // console.log(newNode);
    if (!this.root) {
      this.root = newNode;
    } else {
      let curr = this.root;
      while (curr) {
        if (value < curr.value) {
          if (!curr.left) {
            curr.left = newNode;
            return curr;
          }
          curr = curr.left;
        } else {
          if (!curr.right) {
            curr.right = newNode;
            return curr;
          }
          curr = curr.right;
        }
      }
    }
  }

  lookup(value) {
    if (!this.root) return false;
    let current = this.root;
    while (current) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else if (value === current.value) {
        return current;
      }
    }
    return false;
  }

  BreadthFS() {
    let currentNode = this.root;
    let list = [];
    let queue = [];
    queue.push(currentNode);
    while (queue.length > 0) {
      currentNode = queue.shift();
      console.log(currentNode.value);
      list.push(currentNode.value);
      if (currentNode.left) {
        queue.push(currentNode.left);
      }
      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }
    return list;
  }
  breadthFSRe(queue, list) {
    if (queue.length === 0) {
      return list;
    }

    let currentNode = queue.shift();
    list.push(currentNode.value);
    if (currentNode.left) {
      queue.push(currentNode.left);
    }
    if (currentNode.right) {
      queue.push(currentNode.right);
    }
    return this.breadthFSRe(queue, list);
  }
}

const bfs = new BreadthFirstSearch();
bfs.insert(10);
bfs.insert(20);
bfs.insert(5);
bfs.insert(15);
bfs.insert(25);
bfs.insert(1);
bfs.insert(7);
// console.log(bfs.lookup(20));
// console.log(traverse(bfs.root));
// console.log(bfs.BreadthFS());
console.log(bfs.breadthFSRe([bfs.root], []));
