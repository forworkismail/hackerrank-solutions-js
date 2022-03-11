function divisibleSumPairs(n, k, ar) {
  // Write your code here
  let result = 0;
  let map = {};

  for (let i = 0; i < ar.length; i++) {
    let mod = ar[i] % k;
    let complement = k - mod == k ? 0 : k - mod;

    if (complement in map) {
        result = result + map[complement];
    }

    if (mod in map) {
      map[mod] = map[mod] + 1;
    } else {
      map[mod] = 1;
    }
  }

  return result;
}