// Write a function that takes an array of numbers as input and returns the sum of array
// elements which are multiples of 3
// Examples:
// getSum([1, 3, 8, 5, 9]) ➞ 12

getSum=(arr)=>{
    let sum=0;
    for(i=0;i<arr.length;i++){
         if(arr[i]%3==0){
            sum+=arr[i]
        }
    }
    return sum
}
console.log(getSum([1, 3, 8, 5, 9] ))
console.log(getSum([1,2,3,4,5]))
console.log(getSum([5,10,9,27,30] ))
