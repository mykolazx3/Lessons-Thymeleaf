//============= функції =============
console.log('Приіет, дорогой пользователь!')
//DRY - донт репіт йоселф

sayHi20();

function sayHi20() {
    console.log('sayHifunction Приіет, дорогой пользователь!');
}

sayHi20();








//function declaration
function sayhi21() {
    alert('sayhi1function Привіт');
}

//function expression
const sayhi22 = function () {
    alert('sayhi2function Привіт');
}









//============= параметри і аргументи функції =============
function sayhi23(name23) {
    console.log(`sayhi23function Приіет, ${name23}}!`);
}

sayhi23('mykola');






//============= return =============
function summ20(a, b) {
    const result = a + b;
    //console.log(result);
    return result;
    //console.log('finish') // код який не виконується після return
}

let res = summ20(10, 15);
console.log(res);







//============= функції як аргументи =============
function summ21(a, b) {
    return a + b;
}

console.log(summ21(10, 20));

const result21 = summ21(summ21(1, 2), summ21(4, 5));
console.log(result21);


function diff21(a, b) {
    return a - b;
}

//
function doSubtihing(func) {
    let x = 22;
    let y = 15;
    let result = func(x, y);
    console.log(result);
}

doSubtihing(summ21);
doSubtihing(diff21);







//============= Самовызывающаяся функция IIFE =============
(function () {
    console.log('Самовызывающаяся функция IIFE')
})();

(function (a, b) {
    console.log(a);
    console.log(a);
    console.log(a + b);
})(30, 30)









//============= Стрілочні функції =============
function sayhi25(name) {
    console.log(`Привіт, ${name}! Як справи`)
}

const arrSayHi = (name) => {
    console.log(`Привіт, ${name}! Як справи`)
}

const arrSumm = (a, b) => {
    return a + b
}

const arrSumm2 = (a, b) => a + b;
