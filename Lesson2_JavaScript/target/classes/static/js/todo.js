// =============  ToDo список задач  ================
const todoList100 = document.querySelector('#todo-list');
const todoForm100 = document.querySelector('#todo-form');
const todoInput100 = document.querySelector('#todo-input');

todoForm100.addEventListener('submit', formHandler100); // submit - відправка форми

function formHandler100(event) {
    event.preventDefault();

    // Получаем название задачи из инпута
    const taskText100 = todoInput100.value;

//________________________________________________________________

//     //простий варіант
//     //створюємо тег li через розмітку
//     const li100 = `<li>${taskText100}</li>`;
//     console.log(li100);
//     //добавляєм розмітку на сторінку;
//     todoList100.insertAdjacentHTML('beforeend', li100);

    // складніший варіант // но можна зразу добавляти дію
    // Создаем тег li с помощью создания элемента
    const newTask100 = document.createElement('li');
    newTask100.innerText = taskText100;

//________________________________________________________________

    // Создаем кнопку Удалить
    const deleteBtn100 = document.createElement('button');
    deleteBtn100.setAttribute('role', 'button');
    deleteBtn100.innerText = 'Удалить';
    deleteBtn100.style['margin-left'] = '15px';
    newTask100.append(deleteBtn100);

    // Добавляем событие по клику
    deleteBtn100.addEventListener('click', function () {
        this.closest('li').remove();
    });


    // Добавляем элемент на страницу
    todoList100.append(newTask100);

    // Очищаем поле ввода
    todoInput100.value = '';

    // Фокус на поле ввода
    todoInput100.focus();
}