// КТ3. Задача №5 — есть ли в массиве элемент, удовлетворяющий колбэку
function checkElem(array, callback) {
  for (let elem of array) {
    if (callback(elem)) {
      return true;
    }
  }
  return false;
}

let array = [1, 2, 3, 4];
let result = checkElem(array, (elem) => elem == 3);
console.log(result); // true
console.log(checkElem(array, (elem) => elem > 10)); // false
