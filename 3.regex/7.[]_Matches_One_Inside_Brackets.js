// The character class [ ] matches only one out of several characters placed 
// inside the square brackets.

let Regex_Pattern = /^[1-3][0-2][xs0][30Aa][xsu][.,]${6}/;
// This will match:
// S must be of length 6
// First character: 1, 2 or 3
// Second character: 1, 2 or 0
// Third character: x, s or 0
// Fourth character: 3, 0 , A or a
// Fifth character: x, s or u
// Sixth character: . or ,