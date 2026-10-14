// КТ3. Задача №2 — умножить каждый элемент на n, не меняя исходный массив
function changeElem(array, n) {
  return array.map((elem) => elem * n);
}

let array = [1, 2, 3, 4];
let result = changeElem(array, 3);
console.log(result); // [ 3, 6, 9, 12 ]
console.log(array); //  [ 1, 2, 3, 4 ] — источник не изменился
