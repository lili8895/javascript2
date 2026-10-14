// КТ4. Задача №5 — объекты в массиве заменить массивами их значений (меняем исходный массив)
function generateArray(array) {
  for (let i = 0; i < array.length; i++) {
    let elem = array[i];
    if (!Array.isArray(elem) && typeof elem === "object" && elem !== null) {
      array[i] = Object.values(elem);
    }
  }
  return array;
}

let array = [[1], { id: 40 }, [100], [300], { part: 10 }];
console.log(generateArray(array)); // [ [1], [40], [100], [300], [10] ]
console.log(array); //                тот же (изменённый) массив
