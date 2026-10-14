// КТ5. Задача №5 — сколько осталось до пятницы
const FRIDAY = 5; // getDay(): 0 — воскресенье, ..., 5 — пятница, 6 — суббота

// Склонение: 1 день, 2 дня, 5 дней, 21 день, 11 дней
function pluralDays(n) {
  let mod10 = n % 10;
  let mod100 = n % 100;
  if (mod10 === 1 && mod100 !== 11) return "день";
  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14)) return "дня";
  return "дней";
}

// date — необязательный параметр, чтобы можно было проверить любой день недели
function iIstFridayToday(date = new Date()) {
  let day = date.getDay();
  let daysLeft = (FRIDAY - day + 7) % 7;

  if (daysLeft === 0) {
    console.log("Сегодня пятница!");
  } else if (day === FRIDAY + 1) {
    console.log("Пятница была вчера");
  } else if (daysLeft === 1) {
    console.log("Завтра пятница!");
  } else {
    console.log(`Пятница будет через ${daysLeft} ${pluralDays(daysLeft)}`);
  }
}

iIstFridayToday(); // для текущей даты

// Демонстрация для всех дней недели (12.10.2026 — понедельник)
let names = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];
for (let i = 0; i < 7; i++) {
  process.stdout.write(`${names[i]}: `);
  iIstFridayToday(new Date(2026, 9, 12 + i));
}
