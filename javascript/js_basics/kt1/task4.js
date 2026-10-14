// КТ1. Задача №4 — извлекается ли квадратный корень из длины слова нацело
let word = "меню";

let root = Math.sqrt(word.length);
let result = Number.isInteger(root) ? 1 : 0;

console.log(result); // 1 (длина 4, корень 2)
