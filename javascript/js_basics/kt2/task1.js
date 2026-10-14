// КТ2. Задача №1 — убрать буквы «а» и «о» без учёта регистра (без replace)
let word = "Арнольд";

let result = "";
for (let char of word) {
  let lower = char.toLowerCase();
  // кириллические и латинские а/о
  if (lower !== "а" && lower !== "о" && lower !== "a" && lower !== "o") {
    result += char;
  }
}

console.log(result); // рнльд
