var button = document.querySelector("button");
var input1 = document.getElementById("num1");
var input2 = document.getElementById("num2");
function add(num1, num2) {
    return num1 + num2;
}
button.addEventListener("click", function () {
    console.log(add(+input1.value, +input2.value));
});
var number1 = 5;
var number2 = 2.8;
var result = add(number1, number2);
console.log(result);
// type typeScript
