function getTotalX(a, b) {
  let result = 0;

  // Get LCM of all elements of a
  let lcm = a[0];
  for (let i = 1; i < a.length; i++) {
    lcm = getLCM(lcm, a[i]);
  }

  // Get gcd of all elements of b
  let gcd = b[0];
  for (let i = 1; i < b.length; i++) {
    gcd = getGCD(gcd, b[i]);
  }

  // Count multiples of lcm that divides the gcd
  let multiple = 0;

  while (multiple <= gcd) {
    multiple += lcm;
    if (gcd % multiple == 0) {
      result++;
    }
  }
  return result;
}

const getLCM = (num1, num2) => {
  return (num1 * num2 / getGCD(num1, num2));
}

const getGCD = (num1, num2) => {
  if (num1 == 0) return num2;
  if (num2 == 0) return num1;
  return getGCD(num2, num1 % num2);
}

const array1 = [2, 4];
const array2 = [16, 32, 96];

getTotalX(array1, array2);