function sockMerchant(n, ar) {
  let map = {};
  
  for (let i = 0; i < n; i++) {
      if (!(ar[i] in map)) {
          map[ar[i]] = 1;
      } else {
          map[ar[i]] += 1; 
      }
  }
  
  let counter = 0;
  
  for (let key in map) {
      const value = Math.floor(map[key] / 2);
      counter += value;
  }
  
  return counter;

}