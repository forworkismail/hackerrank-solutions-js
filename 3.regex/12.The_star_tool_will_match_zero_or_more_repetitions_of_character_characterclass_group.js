// The * tool will match zero or more repetitions of character/character class/group.
// w* : It will match the character w 0 or more times.
// [xyz]* : It will match the characters x, y or z 0 or more times.
// \d* : It will match any digit 0 or more times.

let regex_pattern = /^\d{2,}[a-z]*[A-Z]*$/;
// S should begin with 2 or more digits.
// After that, S should have 0 or more lowercase characters.
// S should end with 0 or more uppercase letters