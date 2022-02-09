function minMaxSum(arr) {
  let minimum = Number.MAX_SAFE_INTEGER;
  let maximum = 0;
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    minimum = Math.min(minimum, arr[i]);
    maximum = Math.max(maximum, arr[i]);
  }

  console.log(`${sum - maximum} ${sum - minimum}`);
}