const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function mergeSort(array) {
  if (array.length === 1) {
    return array;
  }
  // Split Array in into right and left
  let mid = Math.floor(array.length / 2);
  let left = array.slice(0, mid);
  let right = array.slice(mid);
  console.log(left, right);
  let ls = mergeSort(left);
  let rs = mergeSort(right);
  console.log(" sort ", ls, rs);
  return merge(ls, rs);
}

function merge(left, right) {
  const res = [];
  let leftPointer = 0;
  let rightPointer = 0;
  while (leftPointer < left.length && rightPointer < right.length) {
    if (left[leftPointer] < right[rightPointer]) {
      res.push(left[leftPointer]);
      leftPointer++;
    } else {
      res.push(right[rightPointer]);
      rightPointer++;
    }
  }
  //   console.log(left, right);
  return res.concat(left.slice(leftPointer), right.slice(rightPointer));
}

const answer = mergeSort(numbers);
console.log(answer);
