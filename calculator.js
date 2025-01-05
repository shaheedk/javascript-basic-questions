// Create a function that takes two numbers and a mathematical operator + - / * and will
// perform a calculation with the given numbers. 
// Examples
// calculator(2, "+", 2) ➞ 4
// calculator(2, "*", 2) ➞ 4
// calculator(4, "/", 2) ➞ 2

function calculator(num1,oprator,num2){
    switch(oprator){
        case '-':
        return num1-num2;
        case '*':
            return num1*num2
            case '+':
                return num1+num2
                case '/':
                    if(num2!==0){
                        return num1/num2
                    }else{
                        return "Error :Devision by zero"
                    }
                    default:
                        return "Error: Invalid oprator"
    }
}
console.log(calculator(7, "-", 3));

console.log(calculator(2, "+", 2))
console.log(calculator(2, "*", 2))
console.log(calculator(4, "/", 2))
console.log(calculator(4, "/", 0))