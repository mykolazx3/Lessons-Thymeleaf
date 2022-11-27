//============= підключення =============
/*
- index.html
- файл main.js
- Тег <script src></script>
- куманда console.log Для вивода в консоль браузера
*/
console.log(5555, 'Hello,from JS!')








//============= змінні =============
let userName = 'Микола';
console.log(userName);








//============= типи змінних =============
// новий стандарт ES6:
// let - змінна
// const - константа
// старий стандарт ES5
// var - змінна
let userName2 = 'Igor'
const yearOfBirth = 1900;
//yearOfBirth =2000; - помилка
let name, age0;
name = 'yurij';

function sum() {
    var name2 = 'yurij'
    console.log(name);
}

//console.log(name2); не видно за межами блоку функції
{
    let userName3 = 'peda';
    console.log(userName3);
    var userName4 = 'peda'
    console.log(userName4)
}
//console.log(userName3)  - помилка
console.log(userName4)








//============= типи даних =============
let userNamee = 'Марк'; // строка, текст, слово, фраза, ціла книга
let age = 30; // числа
let isMarried = true; // Логічні true/false
//Динамічна типізація
let someVariable = 'Some value';
someVariable = 50;
someVariable = false;
//приклад поганої змінної
let u = 'bob';
//приклад хорошого неймінгу
let lastName = 'gonza';
//значення Null
let age2 = null;
//значення undefined
//значення не було присвоєно. змінна була обявленна но не присвоєне значення
let userName5; //undefined
console.log(userName5)








//оператор typeof
const someName = true;
console.log(typeof someName); // виводить тип змінної
//Bigint
console.log(Number.MAX_SAFE_INTEGER);
console.log(94949465636646461461461666161565656116n + 15n);

//Symbol - унікальне примітивне значення, позволяє добавляти унікальне свойство
//до обєкта з впевненністю що він не перезапише ніяку інакшу властивість.









//============= Оператори порівняння і умови =============
// >, <, >=, <=
// == - нестроге порівняння
// === - строге порівняння
// != - нестроге нерівність
// !== - строге нерівність
// = - операція присвоєння
console.log(10 > 5); //true
console.log(20 > 80); //false
console.log('5' == 5); //true - зводить типи
console.log('5' === 5); //false - не зводить типи
//if/else
const time = 12;
if (time <12) {
    console.log('добрий ранок')
} else {
    console.log('добрий день')
};
//if/elseif/else
if (time <12) {
    console.log('добрий ранок')
} else if(time >= 12 && time < 18) {
    console.log('добрий день')
} else {
    console.log('добрий вечір')
};
//логічні оператори
// && - Логічне і
// || - логічне або
// !true - Логічне НЄ









//============= Тернарні оператори =============
//(умова) ? (умова вірна) : (умова не вірна)
10<12 ? console.log('умова вірна') : console.log('умова не вірна')










//============= конкатенація строк і шаблонні строки =============
console.log('привет, марк! як твої справи?')
let greeting ='привет, марк!';
let howareyou =' як твої справи?';
let sayHi0 = greeting + howareyou;
console.log(sayHi0);
const username7 = 'маркУСЕРНЕМЕ';
console.log('привет, ' + username7 + '! як твої справи?');







//шаблонні строки - `` клавіша - Ёё~~
console.log(`Привет, ${username7}! КККак твои дела?`);