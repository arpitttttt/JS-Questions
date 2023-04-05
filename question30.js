const num1 = parseFloat(prompt("Enter the first number"));
const num2 = parseFloat(prompt("Enter the second number"));
const operation = prompt("Enter the operation to perform (+, -, *, /)");
let result;
switch (operation) {
  case "+":
    result = num1 + num2;
    break;
  case "-":
    result = num1 - num2;
    break;
  case "*":
    result = num1 * num2;
    break;
  case "/":
    result = num1 / num2;
    break;
  default:
    console.log("Invalid operation");
}
console.log(`The result of ${num1} ${operation} ${num2} is ${result}`);
