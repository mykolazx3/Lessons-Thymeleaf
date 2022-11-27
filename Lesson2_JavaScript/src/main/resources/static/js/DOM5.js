// ================================  Работа c элементами  ===============================

/*
// Создать элемент
document.createElement('tag-name')

// Изменить HTML содержимое внутри элемента
element.innerHTML = ''

// Изменить Текстовое  содержимое внутри элемента
node.innerText = ''

// Клонирование элемента
node.cloneNode() // true c внутренним содержимым (текст и теги), false - без внутреннего содержимого

// вставить элемент внутрь другого элемента
element.append(nodesOrDOMStrings)

// Удалить элемент
element.remove()
*/

// Выбор контейнера
const container90 = document.querySelector('#elementsContainer');

// Создание заголовка
const newHeader90 = document.createElement('h1');
newHeader90.innerText = 'Новий заголовок';
//newHeader90.textContent = 'Новый заголовок';
container90.append(newHeader90);

// Копирование шапки
const mainHeader90 = document.querySelector('header');
const copyOfHeader90 = mainHeader90.cloneNode(true);
container90.append(copyOfHeader90);

// Вставка разметки через строки
const htmlExample90 = '<h2>Еще один заголовок</h2>';
container90.insertAdjacentHTML('beforeend', htmlExample90);


// Вставка разметки через шаблонные строки
const title90 = 'Текст заголовка';
const htmlExample91 = `<h2>${title90}</h2>`;
container90.insertAdjacentHTML('beforeend', htmlExample91);