function compareTriplets(a, b) {
  if (a.length != b.length) {
    return 0;
  }
  let aMarks = 0, bMarks = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] > b[i]) aMarks++;
    else if (b[i] > a[i]) bMarks++;
  }

  return [aMarks, bMarks];
}

/*
a = [17, 28, 30]
b = [99, 16, 8]
output = [1, 2]
*/
s1 = [17, 16, 30];
s2 = [99, 16, 8];
output = compareTriplets(s1, s2);
console.log(output);

