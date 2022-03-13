function countingValleys(steps, path) {
  // Write your code here
  let elevation = 0;
  let valleyCount = 0;
  for (let i = 0; i < steps; i++) {
      if (path[i] == 'D') {
          elevation--;
      } else {
          if (elevation === -1) {
              valleyCount++;
          }
          elevation++;
      }
  }
  
  return valleyCount;

}