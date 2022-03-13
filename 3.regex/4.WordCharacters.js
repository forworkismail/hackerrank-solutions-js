/!************** Word characters ******************************************/ 
// The expression \w will match any word character.
// Word characters include alphanumeric characters (a-z, A-Z and 0-9) and underscores (_)
// \W matches any non-word character.
// Non-word characters include characters other than alphanumeric characters 
// (a-z, A-Z and 0-9) and underscore (_).
let regex_pattern_word_characters = /\w\w\w\W\w\w\w\w\w\w\w\w\w\w\W\w\w\w/;
// abc%1234567890$abc