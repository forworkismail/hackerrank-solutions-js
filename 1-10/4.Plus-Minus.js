const array = [1, 1, 0, -1, -1];

function plusMinus(arr) {
  let positive = 0;
  let negative = 0;
  let zeros = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      positive++;
    } else if (arr[i] < 0) {
      negative++;
    } else {
      zeros++;
    }
  }
  console.log(`${(positive / arr.length).toFixed(6)}\n${(negative / arr.length).toFixed(6)}\n${(zeros / arr.length).toFixed(6)}`);
}

console.log(plusMinus(array));