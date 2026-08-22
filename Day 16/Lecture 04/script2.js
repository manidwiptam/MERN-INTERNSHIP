// const calculator = require("./script")

// calculator.addition(2, 5);
// calculator.subtraction(5, 2);
// calculator.multiplication(2, 5);
// calculator.division(10, 2);


const cp=require("child_process")
let cal = cp.execSync("calc")
console.log(cal.toString())
