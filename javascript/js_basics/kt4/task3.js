// КТ4. Задача №3 — функция с произвольным количеством аргументов
function logString(...args) {
  let result = "";
  for (let word of args) {
    result += word + " ";
  }
  console.log(result);
}

logString("Hello", "my", "world!"); // "Hello my world! "
