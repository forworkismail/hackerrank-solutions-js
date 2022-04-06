function staircase(n) {
  let result = new Array(n).fill(' ');
  for (let i = n - 1; i >= 0; i--) {
      result[i] = '#';
      console.log(result.join(''));
  }
}
