// КТ2. Задача №5 — проверка слова на палиндром
let word = "потоп";

let lower = word.toLowerCase();
let isPalindrome = true;
for (let i = 0; i < lower.length / 2; i++) {
  if (lower[i] !== lower[lower.length - 1 - i]) {
    isPalindrome = false;
    break;
  }
}

console.log(isPalindrome ? "YES" : "NO"); // YES
