//============= масиви =============
const autoBrand1 = 'Audi';
const autoBrand2 = 'BMW';
const autoBrand3 = 'Mazda';
const autoBrand4 = 'Toyota';

const autoBrands = ['Audi', 'BMW', 'Mazda', 'Toyota'];
console.log(autoBrands);
console.log(autoBrands[0]);
console.log(autoBrands[2]);
console.log(autoBrands.length);

const autoBrands2 = ['Audi', 5, 'Mazda', true, ['BMW', 'Toyota'], 70];
console.log(autoBrands2);









//============= методи масивів =============
// arr.push() - добавляє елемент в кінець масиву
// arr.pop() - удаляє елемент з кінця масиву
// arr.shift() - видаляє елемент з початку масиву
// arr.unshift(...items) - добавляє елемент з початку масиву
//
// .splice([start]], [deleteCount, newElements])
// стартуй з індексу start, видали кількість елементів deleteCount

// .slice()
// .forEach()
// .indexOf()
// .includes()

const autoBrands3 = ['Audi', 'BMW', 'Mazda', 'Toyota'];
console.log(autoBrands3);
autoBrands3.push('Nissan');
console.log(autoBrands3);
let array2 = autoBrands3; // друге посилання на той самий масив

autoBrands3.splice(2, 1);
console.log(autoBrands3);









//============= Цикли =============
console.log('start');
for (let i = 0; i < 10; i++) {
    console.log(i);
}
console.log('finish');
//обхід масива циклом for
console.log('for')
const autoBrands4 = ['Audi', 'BMW', 'Mazda', 'Toyota'];
for (let i = 0; i < autoBrands.length; i++) {
    console.log(autoBrands4[i]);
}








//обхід масива циклом for of
console.log('for of')
for(let item of autoBrands4){
    console.log(item);
}








//обхід масива методом forEach()
console.log('forEach()')
autoBrands4.forEach(function(item, index){
    console.log(`${item} => ${index}`);
})
