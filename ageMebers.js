ageMembers=members=>{
if (members.lenth===0) return [0,0,0]
let age=members.map(member=>member.age)
let youngestAge = Math.min(...age);
let oldestAge = Math.max(...age)
let ageDifference =oldestAge-youngestAge
return [youngestAge,oldestAge,ageDifference]
}
console.log(ageMembers([
    { name: "Mark", age: 38 },
    { name: "Charlie", age: 10 },
    { name: "Anna", age: 25 }]))