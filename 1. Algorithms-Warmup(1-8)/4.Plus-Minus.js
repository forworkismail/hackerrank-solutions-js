function plusMinus(arr) {
  // Write your code here
  let positive = 0;
  let negative = 0;
  let zero = 0;
  let count = arr.length;
  
  for (let i = 0; i < arr.length; i++) {
      if (arr[i] > 0) {
          positive++;
      } else if (arr[i] < 0) {
          negative++;
      } else {
          zero++;
      }
  }
  
  console.log((positive / count).toFixed(6));
  console.log((negative / count).toFixed(6));
  console.log((zero / count).toFixed(6));

}