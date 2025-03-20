// Return the Remainder from Two Numbers
// There is a single operator in JavaScript, capable of providing the
//  remainder of a division operation. Two numbers are passed as
//   parameters. The first parameter divided by the second parameter 
//   will have a remainder, possibly zero. Return that value.

// Examples
// 1.remainder(1, 3) ➞ 1
// 2.remainder(3, 4) ➞ 3
//3.remainder(-9, 45) ➞ -9
// 4.remainder(5, 5) ➞ 0


function remainder(x,y){
    if (x==y){
        return 0
    }else{
        return x
    }

}
console.log( remainder(5, 5))
console.log(remainder(-9, 45))
