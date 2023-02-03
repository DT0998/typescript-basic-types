function add(num1, num2) {
    return num1 + num2;
}
function printResult(num) {
    console.log("Result: " + num);
}
printResult(add(5, 12));
function addAndHandle(num1, num2, callBack) {
    const result = num1 + num2;
    callBack(result);
}
let combineValues;
combineValues = add;
console.log(combineValues(8, 8));
addAndHandle(10, 20, (result) => {
    console.log(result);
    return result;
});
