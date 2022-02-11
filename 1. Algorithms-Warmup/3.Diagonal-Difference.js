const diagonalDifference = (arr) => {
  let left = 0;
  let right = arr[0].length - 1;
  let diagonalLeftSum = 0;
  let diagonalRightSum = 0;

  for (let i = 0; i < arr[0].length; i++) {
    diagonalRightSum += arr[i][left];
    diagonalLeftSum += arr[i][right];
    left++;
    right--;
  }

  return Math.abs(diagonalLeftSum - diagonalRightSum);
}

const twoDimensionalArray = [
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, -12]
]
const output = diagonalDifference(twoDimensionalArray);
console.log(output);