// Regex studies

// Global string
let str = "Hello World World";
let str2 = "Tiago tiago ti";

// To match a word
const helloRegex = /Hello/;

console.log(helloRegex.test(str)); // Returns true

// To match a word and ignore case
const ignoreCaseRegex = /World/i;

console.log(ignoreCaseRegex.test(str)); // Returns true

// The way .match() is called is different than .test()
// I can also add "g" or "i" at the end to ignore case of match multiple times
const matchingWord = /Tiago/i;

console.log(str2.match(matchingWord)); // Returns an array of the matching word if contains

// To match multiple words times and ignore case
const multipleAndIgnoreCase = /Tiago/gi;

console.log(str2.match(multipleAndIgnoreCase)); // Returns an array with all the matches

// The WildCard character "." or simply dot/period is a way to accept any other character
// Example /hu./ would accept "hug", "hut", "huh"
let hugStr = "hug";
let humStr = "hum";
const huRegex = /hu./;

console.log(huRegex.test(hugStr)); // Returns true
console.log(huRegex.test(humStr)); // Returns true

// A character classes allow to define a group of characters to match.
// The matching group of characters can be defined inside of "[]"
let quoteSample =
	"Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi; // Gets all the vowals in the sentance. (Ignore case)
let result = quoteSample.match(vowelRegex); // Returns an array with all the vowals

console.log(result.length); // Gets the size of the array

// "-" can be used to set a range of characters
let catStr = "cat";
let batStr = "bat";
let matStr = "mat";
let bgRegex = /[a-e]at/;
catStr.match(bgRegex); // Returns ["cat"]
batStr.match(bgRegex); // Returns ["bat"]
matStr.match(bgRegex); // Returns null

// "-" can also be used to set a range of numbers
let jennyStr = "Jenny8675309";
let myRegex = /[a-z0-9]/gi;
// matches all letters and numbers in jennyStr
jennyStr.match(myRegex);

// Negated character set are those characters that I don't want
// /[^aeiou]/gi matches all characters that are not a vowel.

// If I need to match a character (or group of characters) that appears one or more times in a row.
// I can use the "+" sign
// It returns an array with the matchs (If there is morre than one match in a row it returns as one element)
let difficultSpelling = "Mississippi";
let myRegex = /s+/g;
let result = difficultSpelling.match(myRegex);
