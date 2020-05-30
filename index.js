// Regex studies

// Global string
let str = "Hello World World";

// To match a word
const helloRegex = /Hello/;

console.log(helloRegex.test(str)); // Returns true

// To match a word and ignore case
const ignoreCaseRegex = /World/i;

console.log(ignoreCaseRegex.test(str)); // Returns true

// To match multiple words times and ignore case
const multipleAndIgnoreCase = /World/gi;

// To return an array of the matching word if contains
// I can also add "g" or "i" at the end to ignore case of match multiple times
const matchingWord = /World/;

// The way .match() is called is different than .test()
console.log(str.match(matchingWord));
