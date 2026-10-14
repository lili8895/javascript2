// КТ4. Задача №6 — добавление, изменение и удаление пользователей
let users = [
  { id: 1, name: "Alex", lastname: "Wilyam", age: 20 },
  { id: 2, name: "Steven", lastname: "King", age: 34 },
];

function addUser(name, lastname, age) {
  // id формируется автоматически: следующий после максимального
  // (пока никого не удаляли — это количество пользователей + 1, т.е. 3)
  let id = users.length === 0 ? 1 : Math.max(...users.map((u) => u.id)) + 1;
  let user = { id, name, lastname, age };
  users.push(user);
  return user;
}

function updateUser(id, name, lastname, age) {
  let user = users.find((u) => u.id === id);
  if (!user) {
    console.log(`Пользователь с id = ${id} не найден`);
    return null;
  }
  user.name = name;
  user.lastname = lastname;
  user.age = age;
  return user;
}

function deleteUser(id) {
  let index = users.findIndex((u) => u.id === id);
  if (index === -1) {
    console.log(`Пользователь с id = ${id} не найден`);
    return false;
  }
  users.splice(index, 1);
  return true;
}

// Демонстрация
console.log("Исходный массив:", users);

addUser("Ivan", "Petrov", 25);
addUser("Maria", "Sokolova", 30);
console.log("После добавления двух пользователей:", users);

updateUser(1, "Alexander", "Wilyam", 21);
console.log("После изменения пользователя id = 1:", users);

deleteUser(2);
console.log("После удаления пользователя id = 2:", users);

updateUser(99, "Nobody", "Nobody", 0); // несуществующий id
deleteUser(99);

addUser("Oleg", "Smirnov", 40); // получит id = 5, а не повторит занятый
console.log("Итог:", users);
