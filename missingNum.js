// Given an array of numbers containing n distinct numbers in the range [0, n], return
// the only number in the range that is missing from the array. 
// Examples
// missingNumber([2, 0, 1, 4]) ➞ 3
// missingNumber([0, 1]) ➞ 2
// missingNumber([4, 2, 3, 5, 0]) ➞ 1
// Note:- n == array.length
function missingNumber(nums){
    let n=nums.length;
    expectedSum=n*(n+1)/2
    let actualSum=nums.reduce((acc,num)=>acc+num,0)
    return expectedSum-actualSum
}
console.log(missingNumber([2, 0, 1, 4]))
console.log(missingNumber([4, 2, 3, 5, 0]))