// Find the highest mark. 
// Examples
// {name: "John", marks: [25, 45, 10, 30] } ➞ 45
// {name: "Kevin", marks: [50, 45, 50, 40] } ➞ 50
function getHighestMark(students){
    return Math.max(...students.marks)
}
console.log(getHighestMark({name: "John", marks: [25, 45, 10, 30]})); // ➞ 45