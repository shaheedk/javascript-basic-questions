// Create a function that takes a string, and returns a string of the words in reverse
// order concatenated by a single space. 
// Note:- The string may contain leading or trailing spaces or multiple spaces between
// two words. The returned string should only have a single space separating the
// words. Do not include any extra spaces.
// Examples
// reverseString(“Welcome to Bridgeon”) ➞ “Bridgeon to Welcome”
// reverseString(" hello world ") ➞ “world hello”
// reverseString("a good example") ➞ "example good a"

reverseString=str=>{
  
let words = str.split(/\s+/);

return words.reverse().join(' ')
}
console.log(reverseString("Welcome to Bridgeon"))