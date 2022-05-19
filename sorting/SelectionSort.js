function selectionSort(arr) {
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    let min = i;
    let temp = arr[i];
    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    arr[i] = arr[min];
    arr[min] = temp;
  }
  return arr;
}

console.log(selectionSort([20, 1, 6, 5, 3, 2, 4]));
