// // 1 Переменные

var firstName = 'Victor'
let age = 26



console.log('Имя человека:' + name + ', а возраст человека:' + age);

const lastName = prompt('Введите фамилию')
alert(firstName + ' ' + lastName)

const currentYear = 2020
const birthYear = 1993

const age= currentYear-birthYear

alert(age)
//////////// Поработать с функциями в отдельном файле
function calculateAge(year) {
    return 2020 - year
}

console.log(calculateAge(1999))

function logInfoAbout(name, year) {

    const age = calculateAge(year)
    if (age > 0) {
        console.log('Человек по имени ' + name + ' сейчас имеет возраст' + age)
    } else {
        console.log('Вообще то это уже будущее')
    }
}
console.log(logInfoAbout('Виктор', 1999))
console.log(logInfoAbout('Виктор', 2023))

//////////////////////////Циклы

const cars=['Mazda','Mers','ford']

for(let i=0; i<cars.length;i++){
    const car = cars[i]
    console.log(car)
}
for(let car of cars){
    console.log(car)
}
//////////////////////////////Объекты

const person={
    firstName:'Victor',
    lastName:'Reznichenko',
    year:1999,
    languages:['Ru','En','De'],
    hasWife:false,
    greet:function(){
        console.log('greet')
    }//метод объекта
}

console.log(person.firstName)
person.greet()
person.isProgrammer= true;//задать объекту новое свойство
console.log(person)