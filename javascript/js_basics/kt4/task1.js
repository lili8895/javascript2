// КТ4. Задача №1 — сумма значений всех свойств объекта
let obj = {
  price1: 100,
  price2: 150,
  price3: 200,
  price4: 100,
  price5: 150,
};

let result = Object.values(obj).reduce((sum, value) => sum + value, 0);
console.log(result); // 700
