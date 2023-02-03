function add(num1: number, num2: number): number {
  return num1 + num2;
}
function printResult(num: number): void {
  console.log("Result: " + num);
}

printResult(add(5, 12));

function addAndHandle(
  num1: number,
  num2: number,
  callBack: (num: number) => void
) {
  const result = num1 + num2;
  callBack(result);
}


// type function
// let combineValues: Function;
let combineValues: (a: number, b: number) => number;
combineValues = add;
// combineValues = printResult;

console.log(combineValues(8, 8));

// let someValue: undefined;

addAndHandle(10, 20, (result) => {
    console.log(result);
    return result;
});
