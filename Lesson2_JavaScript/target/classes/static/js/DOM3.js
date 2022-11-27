// ================================  Работа c прослушкой событий ===============================
const inputText70 = document.querySelector('#input-text');
const textBlock70 = document.querySelector('#text-block');

inputText70.addEventListener('input', inputHandler70)
function inputHandler70(){
    // console.log('Input!');
    console.log(inputText70.value);
    textBlock70.innerText = inputText70.value;
}