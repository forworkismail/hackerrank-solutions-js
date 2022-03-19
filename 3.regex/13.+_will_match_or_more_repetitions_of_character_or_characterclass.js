// The + tool will match one or more repetitions of character/character class/group.

// w+ : It will match the character w or more times.
// [xyz]+ : It will match the character x, y or z or more times.
// \d+ : It will match any digit or more times.

let regex_pattern = /^\d+[A-Z]+[a-z]+$/;
// S should begin with 1 or more digits.
// After that, S should have 1 or more uppercase letters.
// S should end with 1 or more lowercase letters. 