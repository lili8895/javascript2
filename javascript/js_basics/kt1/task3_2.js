// КТ1. Задача №3.2 — калькулятор с обработкой деления на 0
let a = 2;
let b = 0;
let sign = "/";

switch (sign) {
  case "+":
    console.log(a + b);
    break;
  case "-":
    console.log(a - b);
    break;
  case "*":
    console.log(a * b);
    break;
  case "/":
    if (b === 0) {
      console.log("Делить на 0 нельзя!");
    } else {
      console.log(a / b);
    }
    break;
  default:
    console.log("Неизвестная операция");
}
