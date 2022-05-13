function test() {
  while (true) {
    let i = 4;
    if (i < 10) {
      return i;
    }
    i = 20;
  }
}

console.log(test());
