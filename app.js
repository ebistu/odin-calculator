
let firstNumber = 0; 
let secondNumber = 0; 
let operator = "";

function operate(operator, firstNum, secondNum){
    switch(operator){
        case "+":
            add(firstNum, secondNum);
        case "-":
            subtract(firstNum, secondNum);
        case "*":
            multiply(firstNum, secondNum);
        case "/":
            divide(firstNum, secondNum);
    }
}

function add(firstNum, secondNum){
    return firstNum + secondNum;
}

function subtract(firstNum, secondNum){
    return firstNum - secondNum;
}

function multiply(firstNum, secondNum){
    return firstNum * secondNum;
}

function divide(firstNum, secondNum){
    return firstNum / secondNum;
}