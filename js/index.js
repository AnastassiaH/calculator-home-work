let displayIt = clicked => display.value += clicked;
let delegation = function(elem){
    const target = elem.target;
    displayIt(target.innerText);
}

let getEqual = function(){
    statement = display.value;
    display.value = " ";
    arr = statement.split(operator);
    let firstNum = parseFloat(arr[0]);
    let secondNum = parseFloat(arr[1]);

    switch(operator){
        case "+":
            display.value = firstNum + secondNum;
            break;
        case "-":
            display.value = firstNum - secondNum;
            break;
        case "/":
            if (secondNum === 0 ){
                display.value = "Error";
            } else {
                display.value = firstNum / secondNum;
            }
            break;
        case "*": 
            display.value = firstNum * secondNum;
            break;
        case "sqrt":
            display.value = Math.sqrt(firstNum).toFixed(3);
            break;
    }
    
}

let arr = [];
let operator = "";
let statement = 0;
let display = document.querySelector(".display");

let digits = document.querySelectorAll(".digit, .operator").forEach(elem => elem.addEventListener("click", delegation));


document.querySelector(".equal").addEventListener("click", getEqual);
document.querySelector(".minus").addEventListener("click", () => operator = "-");
document.querySelector(".plus").addEventListener("click", () => operator = "+");
document.querySelector(".divide").addEventListener("click", () => operator = "/");
document.querySelector(".multiply").addEventListener("click", () => operator = "*");
document.querySelector(".sqrt").addEventListener("click", () => operator = "sqrt");
document.querySelector(".zero").addEventListener("click", () => display.value = " ");