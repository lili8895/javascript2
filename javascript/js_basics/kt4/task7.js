// КТ4. Задача №7 — работа с массивом products методами массивов
const products = require("./products.js");

// 1. Товары, количество которых больше 10
let task_1 = products.filter((p) => p.count > 10);
console.log("1. count > 10:", task_1);

// 2. Товар с ценой от 800 до 900 включительно
let task_2 = products.find((p) => p.price >= 800 && p.price <= 900);
console.log("2. Цена 800–900:", task_2);

// 3. Сортировка по цене (по убыванию); slice() — чтобы не менять исходный массив
let task_3 = products.slice().sort((a, b) => b.price - a.price);
console.log("3. По убыванию цены:", task_3);

// 4. Итоговая стоимость всех товаров (цена × количество)
let task_4 = products.reduce((sum, p) => sum + p.price * p.count, 0);
console.log("4. Итоговая стоимость:", task_4);

// 5. marks -> marks_total (сумма оценок), результат отсортирован по marks_total
let task_5 = products
  .map(({ marks, ...rest }) => ({ ...rest, marks_total: marks.reduce((s, m) => s + m, 0) }))
  .sort((a, b) => a.marks_total - b.marks_total);
console.log("5. С marks_total:", task_5);
