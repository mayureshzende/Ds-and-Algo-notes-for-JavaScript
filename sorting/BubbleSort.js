// to buuble up the large element to the last
function bubbleSort1(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
    console.log(arr);
  }
  return arr;
}

// console.log(bubbleSort([20, 1, 6, 5, 3, 2, 40, 0, 15, 24, 12, 11, 78, 4]));
// to buuble up the small element to the start
function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
    console.log(arr);
  }
  return arr;
}
console.log(bubbleSort([20, 1, 6, 5, 3, 2, 4]));
