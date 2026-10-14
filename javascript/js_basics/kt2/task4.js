// КТ2. Задача №4 — сумма факториалов от 1 до num
let num = 4;

let factorial = 1;
let sum = 0;
for (let i = 1; i <= num; i++) {
  factorial *= i; // 1, 1*2, 1*2*3, ...
  sum += factorial;
}

console.log(sum); // 33 = 1 + 2 + 6 + 24
