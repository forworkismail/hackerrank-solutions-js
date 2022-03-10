function breakingRecords(scores) {
  let minCount = 0;
  let maxCount = 0;
  let min = scores[0];
  let max = scores[0];

  for (let i = 1; i < scores.length; i++) {
    if (scores[i] > max) {
      maxCount++;
      max = scores[i];
    } else if (scores[i] < min) {
      minCount++;
      min = scores[i];
    }
  }

  return [maxCount, minCount];
}