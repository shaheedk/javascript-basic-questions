// which one is callback function and  which one is higher ordr function
function add(a,b){
    return a+b
}
function divide(a,b){
    return a/b
}
function calculate(x,y,opration){
    return opration(x,y)
}
console.log(calculate(2,2, add));
console.log(calculate(2,2,divide))
 
