
let firstNumber = 0; 
let secondNumber = 0; 
let operator = "";
let displayValue = "";

const calcBtns = document.querySelectorAll('.calc-button');
const operBtns = document.querySelectorAll('.operator-button');

calcBtns.forEach(button => {
    button.addEventListener('click', function(event) {
        updateDisplay(event.target.id);
    });
});

operBtns.forEach(button => {
    button.addEventListener('click', function(event) {
        switch(event.target.id){
            case "c":
                clearDisplay();
                break;
            case "=":
                parseDisplayValue();
                clearDisplay();
                updateDisplay(operate(operator, firstNumber, secondNumber));
                break;
            case "c":
                updateDisplay("");
                break;
            default:
                updateDisplay(event.target.id);
                break;
        }
    });
});

function parseDisplayValue(){
    for(i=0;i<displayValue.length;i++){
        switch(displayValue.charAt(i)){
            case '+':
            case '-':
            case '*':
            case '/':
                operator = displayVale.charAt(i);
                firstNumber = Number(displayValue.slice(0, i));
                secondNumber = Number(displayValue.slice(i+1));
        }
    }
}

function clearDisplay(){
    updateDisplay("");
}

function updateDisplay(txt){
    if(txt === ""){
        displayValue = "";
    } else if(displayValue.length < 24){
        displayValue += txt;
    }
    const display = document.querySelector(".display");
    display.textContent = displayValue;
}

function operate(operator, firstNum, secondNum){
    switch(operator){
        case "+":
            return add(firstNum, secondNum);
        case "-":
            return subtract(firstNum, secondNum);
        case "*":
            return multiply(firstNum, secondNum);
        case "/":
            return divide(firstNum, secondNum);
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