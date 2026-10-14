// КТ3. Задача №3 — сумма строк, которые преобразуются в число (не NaN)
function sumElems(array) {
  let sum = 0;
  for (let elem of array) {
    let value = Number(elem);
    if (!Number.isNaN(value)) {
      sum += value;
    }
  }
  return sum;
}

let array = ["10", "Строка", "5g", "15", "05"];
let result = sumElems(array);
console.log(result); // 30 = 10 + 15 + 5
