//============= Вибір DOM елементів =============
//Вибір одного елемента DOM по селектору
//document.querySelector('selector');
// document.querySelector('h1')//- тег
// document.querySelector('h2') // - встав в консоль
// document.querySelector('.red') //- клас
// document.querySelector('.nav')
// document.querySelector('.header')
// document.querySelector('header.header nav.nav li.link a')
// document.querySelector('#footer') //-id

// const header51 =document.querySelector('h2').classList.add('red');
// const header52 =document.querySelector('h2');
// header52.classList.add('red');
//
// document.querySelector('.heading-3').classList.add('green');

//вибір колекції елементів
// document.querySelectorAll('selector');
// const headings53 = document.querySelectorAll('h2'); // - колекція всії заголовків з тегом h2
// for(let item of headings53){
//     console.log(item);
//     item.classList.add('red-text')
// }
// const paragraphs = document.querySelectorAll('p');
// for(let p of paragraphs){
//     console.log(p);
//     p.classList.add('green-text')
// }
// paragraphs.forEach(function(item){
//     item.classList.add('green-text')
// });



//також є наступні методи
// document.getElementsByClassName(); // вибір колекції елемента по Css класу
// document.getElementsByTagName(); //вибір колекції елементів по тегу
// document.getElementById(); // вибір колекції елементів по ІД








//============= Робота з CSS класами =============
// element.classList.add()
// .add()
// .remove()
// .toggle() - удаляє якщо є такий клас уже, або добавляє його якщо нема
// .contains - повертає ture/false в залежності чи є такий клас у елемента

const heading54 = document.querySelector('h2');
console.log(heading54);
heading54.classList.add('red-text');
heading54.classList.remove('red-text');
heading54.classList.toggle('green-text');
heading54.classList.toggle('green');

heading54.classList.contains('green');

// if(heading.classList.contains('green')){
//
// }else{
//
// }





