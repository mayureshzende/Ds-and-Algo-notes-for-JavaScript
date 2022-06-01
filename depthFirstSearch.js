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

class DepthFS {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
    } else {
      let current = this.root;
      while (current) {
        if (value < current.value) {
          if (!current.left) {
            current.left = newNode;
            return this;
          }
          current = current.left;
        } else {
          if (!current.right) {
            current.right = newNode;
            return this;
          }
          current = current.right;
        }
      }
    }
  }

  depthInOrder() {
    return traverseInorder(this.root, []);
  }
  depthPreOrder() {
    return traversePreorder(this.root, []);
  }
  depthPostOrder() {
    return traverserPostorder(this.root, []);
  }
}

function traverseInorder(node, list) {
  if (node.left) {
    traverseInorder(node.left, list);
  }
  list.push(node.value);
  if (node.right) {
    traverseInorder(node.right, list);
  }
  return list;
}

function traversePreorder(node, list) {
  list.push(node.value);
  if (node.left) {
    traversePreorder(node.left, list);
  }
  if (node.right) {
    traversePreorder(node.right, list);
  }
  return list;
}

function traverserPostorder(node, list) {
  if (node.left) {
    traverserPostorder(node.left, list);
  }
  if (node.right) {
    traverserPostorder(node.right, list);
  }
  list.push(node.value);
  return list;
}

const dfs = new DepthFS();
dfs.insert(9);
dfs.insert(4);
dfs.insert(6);
dfs.insert(20);
dfs.insert(170);
dfs.insert(15);
dfs.insert(1);
// console.log(dfs);
// console.log(traverse(dfs.root));
console.log(dfs.depthInOrder());
console.log(dfs.depthPreOrder());
console.log(dfs.depthPostOrder());
