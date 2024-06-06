// task №1
let someVar = 0;
++someVar;
console.log(`Результат задачі №1`);
if (someVar) {
  console.log(someVar);
}
// task №2
console.log(`Результат задачі №2`);
for (let i = 1; i <= 10; i++) {
  console.log(`Пункт №${i}`);
}
// task №3
console.log(`Результат задачі №3`);
console.log(``);
if (2 * 20 <= 10 || 30 / 2 < 5 && 10 <= "10" || 20 === "20") {
  console.log("000");
}
console.log(`Результат задачі №4`);

// Задача №4
// Створіть функцію, яка повертає результат ділення числа a на число b з додаванням рядка "Результат ділення: "
// Викличте функцію передаючі різні значення, у тому числі не передаючи зовсім.
// Функція не має повертати NaN, Infinite або помилку
console.log(`Результат задачі №4 перший варіант`);
function divideWithMessage(a, b) {
  // Перевіряємо чи передані аргументи, якщо ні, то присвоюємо значення 0 і 1 відповідно
  if (a === undefined) a = 0;
  if (b === undefined || b === 0) b = 1; // Присвоюємо 1, щоб уникнути ділення на 0
  const result = a / b;

  // Повертаємо результат у вигляді рядка
  return `Результат ділення: ${result}`;
}

console.log(divideWithMessage(10, 2));
console.log(divideWithMessage(10, 0));
console.log(divideWithMessage(10));
console.log(divideWithMessage());
console.log(divideWithMessage(0, 5));
console.log(divideWithMessage(-10, 2));

//Використання тернарного оператора для обробки значень за замовчуванням та ділення на нуль
console.log(`Результат задачі №4 другий варіант`);
function divideWithMessage1(a, b) {
  a = a !== undefined ? a : 0;
  b = b !== undefined ? b : 1;

  // Перевіряємо ділення на 0
  const result = b === 0 ? 'Помилка: ділення на нуль неможливе' : `Результат ділення: ${a / b}`;

  return result;
}

// Приклади викликів функції
console.log(divideWithMessage1(8, 2));
console.log(divideWithMessage1(5, 0));
console.log(divideWithMessage1(10));
console.log(divideWithMessage1());
console.log(divideWithMessage1(0, 7));
console.log(divideWithMessage1(-16, 2));

//Розвязання задачі вразі передачі в аргументи рядка з літерами чи символами
console.log(`Результат задачі №4 третій варіант`);
function divideWithMessage2(a, b) {
  function parseNumber(input) {
      if (typeof input === 'string') {
          // Відкидаємо всі символи, крім цифр і крапки
          input = input.replace(/[^0-9.]/g, '');
      }
      return parseFloat(input);
  }

  // Функція для парсингу числа, яка відкидає всі символи, крім цифр і крапки
  // const parseNumber = input => parseFloat(String(input).replace(/[^0-9.]/g, ''));

  // Перетворюємо введені значення на числа
  a = parseNumber(a);
  b = parseNumber(b);

  // Якщо одне з значень не число або b дорівнює нулю
  if (isNaN(a) || isNaN(b) || b === 0) {
      return "Результат ділення: недійсні значення";
  }

  let result = a / b;
  return "Результат ділення: " + result;
}

// Приклади викликів функції з різними значеннями
console.log(divideWithMessage2(10, 2));
console.log(divideWithMessage2('12.3ed', '4'));
console.log(divideWithMessage2('abc', '4'));
console.log(divideWithMessage2('10', 0));
console.log(divideWithMessage2());


// Задача №5
// Створіть масив даних - 5 елементів, один з яких число 10
// Обробіть масив за допомогою методу перебору
// Перевіряйте елемент на відповідність числу 10, та у разі відповідності, виводьте в консоль
console.log(`Результат задачі №5`);
console.log(`Результат задачі №5 вирішення циклом 'for'`);

// метод вирішення задачі циклом for
const array = [3, 10, 'hello', 42, true];

for (let i = 0; i < array.length; i++) {
    if (array[i] === 10) {
        console.log('Знайдено число:', array[i]);
    }
}
console.log(`Результат задачі №5 вирішення методом find`);
// вирішення задачі методом find
const array1 = [3, 10, 'hello js', 42, true];

const found = array1.find(element => element === 10);
if (found !== undefined) {
    console.log('Знайдено число 10:', found);
}
// вирішення задачі з методом some
console.log(`Результат задачі №5 вирішення методом some`);

const array2 = [3, 10, 'hello', 42, true];

const hasTen = array2.some(element => element === 10);
if (hasTen) {
    console.log('Знайдено число 10', hasTen);
}

console.log(`Результат задачі №5 вирішення методом filter`);
//з методом filter
const array3 = [3, 10, 10, 'привіт', 10, 42, false];

const filtered = array3.filter(element => element === 10);
if (filtered.length > 0) {
    console.log('Створено новий масив чисел 10:', filtered);
}

// вирішення задачі методом forEach
console.log(`Результат задачі №5 вирішення методом 'forEach'`);

const array4 = [3, 10, 10, 'hello', 42, 10, true];

array4.forEach(element => {
    if (element === 10) {
        console.log('Знайдено число 10:', element);
    }
})