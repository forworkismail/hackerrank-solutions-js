// The {x,y} tool will match between and (both inclusive) 
// repetitions of character/character class/group.
// w{3,5} : It will match the character w 3, 4 or 5 times.
// [xyz]{5,} : It will match the character x, y or z 5 or more times.
// \d{1, 4} : It will match any digits 1, 2, 3, or 4 times.

let Regex_Pattern = /^\d{1,2}[A-Za-z]{3,}\.{0,3}$/;
// S should begin 1 with 2 or digits.
// After that, S should have 3 or more letters (both lowercase and uppercase).
// Then S should end with up to 3 . symbol(s). You can end with to . symbol(s), inclusively.


