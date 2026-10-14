// КТ5. Задача №4 — «Король сказал:»
function kingSayd(string) {
  const prefix = "Король сказал:";
  if (string.startsWith(prefix)) {
    console.log(string);
  } else {
    console.log(`${prefix} ${string}`);
  }
}

kingSayd("сегодня хорошая погода"); //               Король сказал: сегодня хорошая погода
kingSayd("Король сказал: завтра будет праздник"); // строка выводится без изменений
