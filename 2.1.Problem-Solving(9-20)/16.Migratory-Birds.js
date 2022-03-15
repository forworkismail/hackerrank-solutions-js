function migratoryBirds(arr) {
  // Write your code here
  let map = {};
  
  for (let i = 0; i < arr.length; i++) {
      if (!(arr[i] in map)) {
          map[arr[i]] = 1;
      } else {
          map[arr[i]] += 1;
      }
  }
  
  let maximum = 0;
  let maximumKey = 0;
  
  for (let key in map) {
      if (map[key] > maximum) {
          maximum = map[key];
          maximumKey = key;
      }
  }
  
  return maximumKey;

}