//============= Обєкти =============
const person40 = {
    username40: 'mark',
    age40: 30,
    isMarried40: false,
    profession41: 'Designer'
}

console.log(person40);
console.log(person40.username40);
console.log(person40['age40']);

let propertyName = 'profession41';
console.log(person40[propertyName]);

person40.hobbie41 = 'sport';
console.log(person40);

delete person40.age40;
console.log(person40);








//============= методи в обєктах =============
//============= this =============
const person41 = {
    username41: 'mark',
    age41: 30,
    isMarried41: false,
    profession41: 'Designer',
    sayHi41: function(name41){
        console.log(`Привіт! ${name41} мене звати ${this.username41}`);
    }
}

person41.sayHi41('mykola41');
person41.sayGb41 = function(name41){
    console.log(`goodbye ${name41}`);
}
person41.sayGb41('mykola41');








//============= обєкти обход циклом for in (не путати з for of) =============
console.log('for in');
for(let key in person41){
    console.log(key);
    console.log(key, ' : ', person41[key]);
}









//============= нюанс const і зміни обєкта і масива =============
//не можна міняти const обєкти або масиви, але поля обєктів і масивів можна міняти;








//============= Класи, коструктори обєктів =============
class Person42{
    constructor(username42, age42,isMaried42) {
        this.username42 = username42;
        this.age42 = age42;
        this.isMaried42 = isMaried42;
    }
    sayHi42(name42){
        console.log(`Привіт! ${name42} мене звати ${this.username42}`);
    }
}

const person43 = new Person42('mark', 30, false);
const person44 = new Person42('mark', 30, false);