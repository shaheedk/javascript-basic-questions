// Q. Create a function that accepts a string of space separated numbers and returns the
// highest and lowest number (as a string). (Score 3)
// Examples
// highLow("1 2 3 4 5") ➞ "5 1"
// highLow("1 2 -3 4 5") ➞ "5 -3"
// highLow("1 9 3 4 -5") ➞ "9 -5"
// highLow("13") ➞ "13 13"

const highLow=(arr)=>{
    
 let result=arr.split(' ').sort((a,b)=>a-b);

return `${result[result.length - 1]} ${result[0]}`;
}
console.log(highLow("1 2 3 4 5"))
console.log(highLow("1 2 -3 4 5"))
console.log(highLow("1 9 3 4 -5"))