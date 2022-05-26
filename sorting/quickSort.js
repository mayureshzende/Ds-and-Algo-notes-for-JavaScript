const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function quickSort(array, left, right) {
  const len = array.length;
  let pivot;
  let partitionIndex;

  if (left < right) {
    pivot = right;
    partitionIndex = partition(array, pivot, left, right);

    //sort left and right
    quickSort(array, left, partitionIndex - 1);
    quickSort(array, partitionIndex + 1, right);
  }
  return array;
}

function partition(array, pivot, left, right) {
  let pivotValue = array[pivot];
  let partitionIndex = left;

  for (let i = left; i < right; i++) {
    if (array[i] < pivotValue) {
      swap(array, i, partitionIndex);
      partitionIndex++;
    }
  }
  swap(array, right, partitionIndex);
  return partitionIndex;
}

function swap(array, firstIndex, secondIndex) {
  var temp = array[firstIndex];
  array[firstIndex] = array[secondIndex];
  array[secondIndex] = temp;
}

// Select first and last index as 2nd and 3rd parameters
quickSort(numbers, 0, numbers.length - 1);
console.log(numbers);

// ====> 2nd way easy to understand and implement
function quickSort1(array) {
  if (array.length <= 1) {
    return array;
  }

  let pivot = array[array.length - 1];
  let leftArr = [];
  let rightArr = [];
  for (let i = 0; i < array.length - 1; i++) {
    array[i] < pivot ? leftArr.push(array[i]) : rightArr.push(array[i]);
  }

  return [...quickSort1(leftArr), pivot, ...quickSort1(rightArr)];
}

//   if (leftArr.length > 0 && rightArr.length > 0) {
//     return [...quickSort1(leftArr), pivot, ...quickSort1(rightArr)];
//   } else if (leftArr.length > 0) {
//     return [...quickSort1(leftArr), pivot];
//   } else {
//     return [pivot, ...quickSort1(rightArr)];
//   }

// console.log(quickSort1([9, 7, 4, 1, 10, 34, 5]));
console.log(quickSort1(numbers));
