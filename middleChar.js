// Create a function and return the middle character (or characters) of a given string. If the
// word's length is odd, return the middle character. If the word's length is even, return the
// middle two characters. 

// Examples
// middleChar("ABC") ➞ "B"
// middleChar("Bridgeon") ➞ "dg"

middleChar=word=>{
    const length = word.length;
     const mid=Math.floor(length/2)
     if (length%2==0){
        return word.slice(mid -1,mid +1)
     }else{
        return word[mid]
     }
}

console.log( middleChar("ABC"));
console.log(middleChar("Bridgeon"))