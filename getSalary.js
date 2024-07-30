// Create the function that takes an array with objects and returns the sum of people's
// salaries. 

// Examples
// getSalary([
// { name: "John", salary: 23000 },
// { name: "Steve", salary: 40000 },
// { name: "Martin", salary: 15000 }
// ]) ➞ 78000

function getSalary(arr){
    return arr.reduce((total,person)=>total+person.salary,0)
}
console.log(getSalary([
    { name: "John", salary: 23000 },
    { name: "Steve", salary: 40000 },
    { name: "Martin", salary: 15000 }
    ]));