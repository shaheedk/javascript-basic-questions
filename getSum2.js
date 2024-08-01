// Create a function that takes an array of integers (positive or negative or both) and
// return the sum of the absolute value of each element.
// Examples
// getSum([2, -1, 4, 8, 10]) ➞ 25
// getSum([-3, -4, -10, -2, -3]) ➞ 22
// getSum([2, 4, 6, 8, 10]) ➞ 30

function getSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += Math.abs(arr[i]);
    }
    return sum;
  }
  
  // Test cases
  console.log(getSum([2, -1, 4, 8, 10])); // ➞ 25
  console.log(getSum([-3, -4, -10, -2, -3])); // ➞ 22
  
  