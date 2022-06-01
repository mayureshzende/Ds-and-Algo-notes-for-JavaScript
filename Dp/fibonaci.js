let cal = 0;
function fibonaci() {
  const cache = {};
  return function fib(n) {
    cal++;
    if (n in cache) {
      return cache[n];
    } else {
      if (n < 1) {
        return 1;
      } else {
        cache[n] = fib(n - 1) + fib(n - 2);
        return cache[n];
      }
    }
    // return fib(n - 1) + fib(n - 2);
  };
}

const memo = fibonaci();
console.log(memo(5), " -> ", cal);
// console.log(fibonaci(5)); 13 -> 25 cal
// console.log(cal);
