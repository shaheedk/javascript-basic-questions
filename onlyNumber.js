/*Given an array, Return only the numbers into a new array 
Example:
onlyNumber([1,”bridgeon”,true,5]) = [1,5]|
onlyNumber([“10”,false,6,”Ten”]) = [6]*/
function onlyNumber(arr){
    return arr.filter(item => typeof item === 'number');
}
console.log(onlyNumber(["10",false,6,'ten']))
console.log(onlyNumber([1,'bridgeon',true,5]) )