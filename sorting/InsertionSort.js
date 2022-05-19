function InsertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    for (let j = i; j >= 0; j--) {
      if (arr[j] < arr[j - 1]) {
        // const temp = arr[j - 1];
        // arr[j - 1] = arr[j];
        // arr[j] = temp;
        [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
      } else {
        break;
      }
    }
  }
  return arr;
}

console.log(InsertionSort([4, 2, 1, 3, 0]));
