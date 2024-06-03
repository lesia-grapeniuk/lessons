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

// буде помилкою, адже змінна const - є константою, тобто її значення не можна змінити після ініціалізації, і врезультаті ми отриаємо помилку!


// Задача №3
// Що потрапить в консоль?
// let numOne = 20
// let numTwo = "20"

// let numSumm = numOne + numTwo
// console.log(numSumm)

let numOne = 20;
let numTwo = '20';
let numSumm = numOne + numTwo;

console.log(numOne);
console.log(numTwo);
console.log(`${typeof numOne} + ${numTwo} = ${typeof numSumm}`);
console.log(`в результаті отриваємо рядок '${numSumm}' про що свідчить текст білого кольору :)`);

// в результаті ми отримаємо рядок 2020 (при додаванні рядка з числом відбувається конкатенація)
const outputElement = document.getElementById('output');

outputElement.textContent += "Задача №1\n";
outputElement.textContent += "Яка назва змінної вірна?\n";
outputElement.textContent += "1) let user-name\n";
outputElement.textContent += "2) let UserName\n";
outputElement.textContent += "3) let userName\n";
outputElement.textContent += "\n Правильна відповідь №3. Застосовується стиль - lowerCamelCase.\n\n";

outputElement.textContent += "Задача №2\n";
outputElement.textContent += "Чи буде помилка при виконанні наступної програми?\n";
outputElement.textContent += "const userName = 20\n";
outputElement.textContent += "userName = \"Іштван\"\n";
outputElement.textContent += "\nБуде помилкою, адже змінна const - є константою, тобто її значення не можна змінити після ініціалізації, і врезультаті виконання даної програми ми отримаємо помилку!\n\n";

outputElement.textContent += "Задача №3\n";
outputElement.textContent += "Що потрапить в консоль?\n";
outputElement.textContent += "let numOne = 20\n";
outputElement.textContent += "let numTwo = \"20\"\n";
outputElement.textContent += "\nlet numSumm = numOne + numTwo\n";
outputElement.textContent += "let numOne = 20;\n";
outputElement.textContent += "let numTwo = '20';\n";
outputElement.textContent += "let numSumm = numOne + numTwo;\n";
outputElement.textContent += "console.log(numSumm);\n";
outputElement.textContent += "\nВ результаті ми отримаємо рядок '2020' (при додаванні рядка з числом відбувається конкатенація, тобто склеювання рядка з числом. I вуаля... число вже не число:)). Можна переконатися, відкривши DevTools та перейти на вкладку 'console'.\n";
