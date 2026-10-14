// КТ1. Задача №3.1 — простой калькулятор (b гарантированно не равно 0)
let a = 2;
let b = 6;
let sign = "*";

switch (sign) {
  case "+":
    console.log(a + b);
    break;
  case "-":
    console.log(a - b);
    break;
  case "*":
    console.log(a * b); // 12
    break;
  case "/":
    console.log(a / b);
    break;
  default:
    console.log("Неизвестная операция");
}
