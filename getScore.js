// Create a function that takes an array with objects and returns the sum of the student's
// scores. 
// Examples
// getScore([ { name: "Henry", score: 59 }, { name: "Jack", score: 41 }, { name: "Maria",
// score: 88 } ]) ➞ 188
// getScore([ { name: "Alex", score: 90 }, { name: "Megan", score: 32 } ]) ➞ 122

getScore=data=>data.reduce((total,students)=>total+students.score,0)

console.log(getScore([ { name: "Alex", score: 90 }, { name: "Megan", score: 32 } ]))
console.log(getScore([ { name: "Henry", score: 59 }, { name: "Jack", score: 41 }, { name: "Maria",score: 88 } ]));
