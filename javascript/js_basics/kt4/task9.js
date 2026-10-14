// КТ4. Задача №9 — класс Contact наследует Email и добавляет телефон
const Email = require("./task8.js");

class Contact extends Email {
  #phone = "";

  constructor(email, phone) {
    super(email); // email, его геттер и сеттер унаследованы от Email
    this.phone = phone;
  }

  // Новый геттер свойства phone: возвращает тип номера
  get phone() {
    if (!this.#phone.startsWith("+")) {
      return "Неизвестный";
    }
    let length = this.#phone.length - 1; // длина без знака +
    if (length === 12) {
      return "Мобильный";
    }
    if (length === 18) {
      return "Городской";
    }
    return "Неизвестный";
  }

  set phone(value) {
    if (typeof value !== "string") {
      throw new TypeError("Телефон должен быть строкой");
    }
    this.#phone = value;
  }

  // Сам номер (для вывода)
  get phoneNumber() {
    return this.#phone;
  }
}

// Демонстрация
let mobile = new Contact("ivan@mail.ru", "+375291234567"); //       12 символов после +
let city = new Contact("office@company.ru", "+7 (8782) 20-30-405"); // 18 символов после +
let unknown = new Contact("test@test.ru", "89001234567"); //         без +

for (let contact of [mobile, city, unknown]) {
  console.log(`${contact.email} | ${contact.phoneNumber} | ${contact.phone}`);
}

mobile.email = "ivan.new@mail.ru"; // унаследованный сеттер
console.log(mobile.email, mobile instanceof Email); // ivan.new@mail.ru true
