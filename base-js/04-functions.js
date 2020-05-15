// // Функции
// //Function declaration
// function greet(name) {
//     console.log('Привет-', name)
// }
// //Function Expression
// const greet2 = function greet2(name) {
//     console.log('Привет 2-', name)

// }
// // greet('lena')
// // greet2('lena')

// // console.log(typeof greet)
// // console.dir(greet)

// // Анонимные функции
// let counter = 0
// const interval = setInterval(function () {
//     if (counter === 5) {
//         clearInterval(interval)
//     } else {
//         console.log(++counter)
//     }
// }, 1000)

////Стрелочные функции
// function greet() {
//     console.log('Привет-')
// }
// const arrow = (name, age) => {
//     console.log('Привет-', name, age)
// }
// const arrow2 = name => console.log('Привет-', name)

// arrow2('victor')

// const pow = num => num ** 2

// console.log(pow(5))

////Параметры по умолчанию

// const sum = (a = 40, b = a * 2) => a + b

// console.log(sum(41, 4));
// console.log(sum());

// function sumAll(...all) {
//     let result = 0

//     for (let num of all) {
//         result += num
//     }
//     return result;

// }

// const res = sumAll(1, 2, 3, 4, 5)
// console.log(res)

////Замыкания

// function createMember(name) {
//     return function (lastName) {
//         console.log(name + lastName)
//     }
// }
// const logWithLastName= createMember('Victor')
// console.log(logWithLastName('rez'))

