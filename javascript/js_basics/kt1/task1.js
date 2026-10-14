// КТ1. Задача №1 — строка «<price> Р в <период>»
let price = 10000;
let range = "day"; // month / day / week

let rangeRu;
if (range === "day") {
  rangeRu = "день";
} else if (range === "week") {
  rangeRu = "неделю";
} else if (range === "month") {
  rangeRu = "месяц";
}

let result = `${price} Р в ${rangeRu}`;
console.log(result); // 10000 Р в день
