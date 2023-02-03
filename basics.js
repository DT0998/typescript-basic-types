const button = document.querySelector("button");
const input1 = document.getElementById("num1");
const input2 = document.getElementById("num2");
function add(num1, num2, showResult, phrase) {
    const result = num1 + num2;
    if (showResult) {
        console.log(phrase + result);
    }
    else {
        return num1 + num2;
    }
}
let number1;
number1 = 5;
const number2 = 2.8;
const printResult = true;
let resultPhrase = "Result is: ";
add(number1, number2, printResult, resultPhrase);
