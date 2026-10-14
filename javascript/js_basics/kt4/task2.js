// КТ4. Задача №2 — каждый объект массива превратить в массив значений
let array = [
  { id: 1, name: "apple" },
  { id: 2, name: "watermelon" },
  { id: 3, name: "qiwi" },
  { id: 4, name: "lemon" },
];

let result = array.map((item) => Object.values(item));
console.log(result); // [ [1,'apple'], [2,'watermelon'], [3,'qiwi'], [4,'lemon'] ]
