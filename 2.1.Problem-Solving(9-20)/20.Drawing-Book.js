function pageCount(n, p) {
  if (p == 1) return 0;
  if (n == p) return 0;
  
  let front = Math.floor(p / 2);
  let back = n % 2 == 1 ? Math.floor((n - p) / 2) : Math.floor(((n - p) + 1) / 2)
  
  let min = Math.min(front, back);
  return min;
}