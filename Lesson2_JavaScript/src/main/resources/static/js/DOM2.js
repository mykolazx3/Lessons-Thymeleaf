//============= Робота з атрибутами =============
/*
getAttribute(attrName) — возвращает значение указанного атрибута
setAttribute(name, value) — добавляет указанные атрибут и его значение к элементу
hasAttribute(attrName) — возвращает true при наличии у элемента указанного атрибута
removeAttribute(attrName) — удаляет указанный атрибут

toggleAttribute(name, force) — добавляет новый атрибут при отсутствии или удаляет существующий атрибут.
hasAttributes() — возвращает true, если у элемента имеются какие-либо атрибуты
getAttributesNames() — возвращает названия атрибутов элемента
*/



// const img60 = document.querySelector('#logo');
// const srcValue60 = img60.getAttribute('src');
// console.log(srcValue60);
//
// img60.setAttribute('src', '/img/php.png');
// img60.setAttribute('width', '200');
// img60.src = '/img/js.png';
//
// const button60 = document.querySelector('#button');
// button60.setAttribute('value', 'Отправить');
// button60.value = 'текст для кнопки';






// ================================  Работа c прослушкой событий ===============================
const button61 = document.querySelector('#button');
const img61 = document.querySelector('#logo');
button61.value = 'Видалити';


// є різні події, click одна з; EventListener може бути безліч
// button61.addEventListener('click', function(){
// console.log('click!!');
// img61.remove();
// })
// button61.addEventListener('click', function(){
// console.log('click EventListener2 !!');
// })

//onclick - може бути тільки один
button61.onclick = function (){
    console.log('click!!');
    img61.remove();
}