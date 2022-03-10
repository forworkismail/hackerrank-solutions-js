function birthday(s, d, m) {
  // Write your code here
  let result = 0;
  for(let i = 0; i < (s.length - m) + 1; i++) {
    if (d === sumArray(s.slice(i, i + m))) {
      result += 1;
    }
  }

  return result;
}

const sumArray = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}