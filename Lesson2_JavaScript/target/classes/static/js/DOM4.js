// ================================  Объект event   ===============================
const list80 = document.querySelector('#list');

list80.addEventListener('click', function (event) {
    console.log(this);
    console.log(event);
    console.log(event.target);
})