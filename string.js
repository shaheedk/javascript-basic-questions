// Create a function that takes two strings as arguments and returns either true or false
// depending on whether the total number of characters in the first string is equal to the
// total number of characters in the second string. 
// Examples
// comp("AB", "CD") ➞ true
// comp("ABC", "DE") ➞ false
// comp("hello", "bridgeon") ➞ false

function comp(str1,str2){
    return str1.length===str2.length
}
console.log(comp("hello", "guys"))
console.log(comp("AB", "CD") )
