function formingMagicSquare(s) {
  const all_magic_square = [
    [[8, 1, 6], [3, 5, 7], [4, 9, 2]], 
    [[6, 7, 2], [1, 5, 9], [8, 3, 4]], 
    [[2, 9, 4], [7, 5, 3], [6, 1, 8]], 
    [[4, 3, 8], [9, 5, 1], [2, 7, 6]], 
    [[6, 1, 8], [7, 5, 3], [2, 9, 4]], 
    [[2, 7, 6], [9, 5, 1], [4, 3, 8]], 
    [[4, 9, 2], [3, 5, 7], [8, 1, 6]], 
    [[8, 3, 4], [1, 5, 9], [6, 7, 2]]
  ]

  let min_cost = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i < all_magic_square.length; i++) {
    let cost = getCost(s, all_magic_square[i]);
    min_cost = Math.min(min_cost, cost);
  }

  return min_cost;  
}

const getCost = (arr = [], magic = []) => {
  let cost = 0;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      cost += Math.abs(arr[i][j] - magic[i][j]);
    }
  }

  return cost;
}