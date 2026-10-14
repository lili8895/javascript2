// КТ1. Задача №2 — выбор активности по погоде
let temp = 25;
let weather = "clear";

let activity;
if (temp >= 25 && weather === "clear") {
  activity = "golf";
} else if ((temp >= 10 && temp <= 24) || weather === "cloudy") {
  activity = "bowling";
} else {
  activity = "hiking";
}

console.log(activity); // golf
