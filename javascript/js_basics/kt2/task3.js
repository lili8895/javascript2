// КТ2. Задача №3 — «лесенка» конкатенацией: 1 12 123 1234 12345
let num = 5;

let step = "";
let result = [];
for (let i = 1; i <= num; i++) {
  step += i;
  result.push(step);
}

console.log(result.join(" ")); // 1 12 123 1234 12345
