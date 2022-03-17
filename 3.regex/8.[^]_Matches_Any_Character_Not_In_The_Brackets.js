// The negated character class [^] matches any character 
// that is not in the square brackets.
let Regex_Pattern = /^[^\d][^aeiou][^bcDF][^\s][^AEIOU][^\.,]$/;
// This will match:
// S must be of length 6
// First character should not be a digit (0, 1, 2, 3, 4, 5, 6, 7, 8, 9)
// Second character should not be a lowercase vowel (a, e, i, o, u)
// Third character should not be b, c, D or F
// Fourth character should not be a whitespace character ( \r, \n, \t, \f or <space> )
// Fifth character should not be a uppercase vowel (A, E, I, O, U)
// Sixth character should not be a . or , symbol.