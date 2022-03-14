// GCD of two numbers
const gcdOfTwoNumbers = (num1, num2) => {
  if (num2 === 0) return num1;
  if (num1 === 0) return num2;
  return gcdOfTwoNumbers(num2, num2 % num1);
}

console.log(gcdOfTwoNumbers(4, 6));

