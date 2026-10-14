// КТ2. Задача №2 — числа от 1 до num, делящиеся на 3 без остатка
let num = 20;

let result = [];
for (let i = 1; i <= num; i++) {
  if (i % 3 === 0) {
    result.push(i);
  }
}

console.log(result.join(" ")); // 3 6 9 12 15 18
