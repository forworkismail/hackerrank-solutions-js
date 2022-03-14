function getMoneySpent(keyboards, drives, b) {
  let maximum = -1;
  
  for (let i = 0; i <= keyboards.length; i++) {
      for (let j = 0; j <= drives.length; j++) {
          if (keyboards[i] + drives[j] <= b ) {
              maximum = Math.max(maximum, keyboards[i] + drives[j]);
          }
      }
  }
  
  return maximum;

}