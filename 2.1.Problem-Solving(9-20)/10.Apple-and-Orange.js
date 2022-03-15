function countApplesAndOranges(s, t, a, b, apples, oranges) {
  // Write your code here
  let applesCount = 0;
  let orangesCount = 0;

  for (let i = 0; i < apples.length; i++) {
    let applePosition = apples[i] + (a);
    if (applePosition >= s && applePosition <= t) {
      applesCount++;
    }
  }

  for (let i = 0; i < oranges.length; i++) {
    let orangePosition = oranges[i] + (b);
    if (orangePosition >= s && orangePosition <= t) {
      orangesCount++;
    }
  }

  console.log(applesCount)
  console.log(orangesCount)
}

console.log(countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6]))