// КТ4. Задача №4 — есть ли в объекте ключ particle (с любым значением)
function checkObj(obj) {
  return Object.prototype.hasOwnProperty.call(obj, "particle");
}

console.log(checkObj({ id: 1, particle: 10 })); // true
console.log(checkObj({ id: 2, name: "tag" })); //   false
console.log(checkObj({ particle: undefined })); //  true — ключ есть, значение любое
