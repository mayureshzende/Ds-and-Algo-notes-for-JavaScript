let counter = 0;
function callMe() {
  if (counter > 3) return "done";
  counter++;
  // if we not add the return to the recursive call then it not bubbled
  // up to stack and whem the base case execute, the call stack
  // start to pop the function call to pop of the stack
  //   callMe();
  return callMe();
}

// console.log(callMe());

function findRecursionRecursive(num) {
  if (num <= 1) {
    return 1;
  }

  return findRecursionRecursive(num - 1) * num;
}
// console.log(findRecursionRecursive(5));

function findIterativeRecursion(num) {
  if (num < 2) return 1;
  let ans = 1;
  for (let i = 1; i <= num; i++) {
    ans *= i;
  }
  return ans;
}

// console.log(findIterativeRecursion(5));

function fibRecursive(n) {
  if (n < 2) return n;

  return fibRecursive(n - 1) + fibRecursive(n - 2);
}
// 0 1 1 2 3 5 8 13 21 34
// 0 1 2 3 4 5 6 7  8  9
// console.log(fibRecursive(4));

function fibonacci(n) {
  const arr = [0, 1];
  for (let i = 2; i <= n; i++) {
    arr.push(arr[i - 2] + arr[i - 1]);
  }
  return arr[n];
}
// console.log(fibonacci(8));

//Implement a function that reverses a string using iteration...
// and then recursion!
function reverseString(str) {
  let arr = str.split("");
  let rev = "";
  for (let i = arr.length - 1; i >= 0; i--) {
    rev += arr[i];
  }
  return rev;
  //   return arr.reverse().join("");
}

// console.log(reverseString("yoyo mastery"));
//should return: 'yretsam oyoy'

function revstringRec(str) {
  if (str === "") {
    return "";
  } else {
    return revstringRec(str.substr(1)) + str.charAt(0);
  }
}

console.log(revstringRec("yoyo mastery"));
