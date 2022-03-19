// The tool {x} will match exactly x repetitions of character/character class/groups.
// For Example:

// w{3} : It will match the character w exactly
// times.
// [xyz]{5} : It will match the string of length consisting of characters {x, y, z}.
// For example it will match xxxxx, xxxyy and xyxyz.
// \d{4} : It will match any digit exactly times.

let regex_pattern = /^[A-Za-z02468]{40}[13579\s]{5}$/;
// Text must be of length equal to 45.
// The first 40 characters should consist of letters(both lowercase and uppercase), or of even digits.
// The last 5 characters should consist of odd digits or whitespace characters.
