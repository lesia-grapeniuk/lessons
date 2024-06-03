// Задача №1
// Яка назва змінної вірна
// 1) let user-name
// 2) let UserName
// 3) let userName

// Правильна відповідь №3

// Задача №2
// Чи буде помилка при виконанні наступної програми
// const userName = 20
// userName = "Іштван"
// console.log(userName);
// TypeError: Assignment to constant variable.

// буде помилкою, адже змінна const - є константою, тобто її значення не можна змінити після ініціалізації, і врезультаті ми отриаємо помилку!

// Задача №3
// Що потрапить в консоль?
// let numOne = 20
// let numTwo = "20"

// let numSumm = numOne + numTwo
// console.log(numSumm)

let numOne = 20;
let numTwo = "20";
let numSumm = numOne + numTwo;

console.log(numOne);
console.log(numTwo);
console.log(`${typeof numOne} + ${numTwo} = ${typeof numSumm}`);
console.log(
  `в результаті отриваємо рядок '${numSumm}' про що свідчить текст білого кольору :)`
);

// в результаті ми отримаємо рядок 2020 (при додаванні рядка з числом відбувається конкатенація)
