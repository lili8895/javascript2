// КТ4. Задача №8 — класс Email с геттером и сеттером
class Email {
  #email = "";

  constructor(email) {
    this.email = email; // проверка выполняется в сеттере
  }

  get email() {
    return this.#email;
  }

  set email(value) {
    if (typeof value !== "string") {
      throw new TypeError("Email должен быть строкой");
    }
    if (!value.includes("@")) {
      throw new Error(`Некорректный email: ${value}`);
    }
    this.#email = value.trim();
  }
}

// Демонстрация (выполняется только при прямом запуске файла)
if (require.main === module) {
  let first = new Email("ivan@mail.ru");
  let second = new Email("maria@yandex.ru");
  console.log(first.email); //  ivan@mail.ru
  console.log(second.email); // maria@yandex.ru

  second.email = "maria.new@gmail.com";
  console.log(second.email); // maria.new@gmail.com

  try {
    first.email = "без-собаки";
  } catch (error) {
    console.log("Ошибка:", error.message);
  }
}

module.exports = Email;
