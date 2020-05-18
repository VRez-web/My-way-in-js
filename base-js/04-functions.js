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

/*========Рекурсия
– это термин в программировании, означающий вызов функцией самой себя.
 Рекурсивные функции могут быть использованы для элегантного решения определённых задач.
*/
//===========Задачи
/*....Напишите функцию sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + n.

Сделайте три варианта решения:

С использованием цикла.
Через рекурсию, т.к. sumTo(n) = n + sumTo(n-1) for n > 1.
С использованием формулы арифметической прогрессии.
*/

// const sumTo = n => {
//     let sum = 0
//     for (let i = 0; i <= n; i++) {
//         sum += i
//     }
//     return sum
// }

// const sumTo = n => (n == 1) ? n : n + sumTo(n - 1)

// console.log(sumTo(100))

/*....Написать функцию factorial(n), которая возвращает n!, используя рекурсию.
 */

// const factorial = n => (n != 1) ? n * factorial(n - 1) : 1
// console.log(factorial(5))

/*.....Напишите функцию fib(n) которая возвращает n-е число Фибоначчи.
 */
// const fib = n => (n <= 1) ? n:  fib(n - 1) + fib(n - 2)

// console.log(fib(7))


// let list = {
//     value: 1,
//     next: {
//         value: 2,
//         next: {
//             value: 3,
//             next: {
//                 value: 4,
//                 next: null
//             }
//         }
//     }
// }

//....Напишите функцию printList(list), которая выводит элементы списка по одному.

// const printList = list => {
//     console.log(list.value)

//     if (list.next) {
//         printList(list.next)
//     }
// }
// printList(list)

//============Замыкания
// function createCalcFunction(n) {
//     return function () {
//             console.log(1000*n)

//     }
// }
// const calc= createCalcFunction(42)

// calc()

// function createIncrementor(n) {
//     return function (num) {
//         return n + num
//     }
// }
// const addOne = createIncrementor(1)
// const addTen = createIncrementor(10)
// console.log(addOne(10))
// console.log(addOne(41))

// console.log(addTen(10))
// console.log(addTen(41))

// function urlGenerator(domain) {
//     return function (url) {
//         return `https://${url}.${domain}`
//     }
// }
// const comUrl = urlGenerator('com')
// const ruUrl = urlGenerator('ru')
// console.log(comUrl('google'))
// console.log(comUrl('netflix'))

// console.log(ruUrl('yandex'))
// console.log(ruUrl('vkontakte'))



//===Задачи===
/*Напишите функцию sum, которая работает таким образом: sum(a)(b) = a+b.
 */

// function sum(a) {

//     return function (b) {
//         return a + b
//     }
// }

// console.log(sum(3)(5))


//======call, bind, apply

function hello() {
    console.log('hello', this)

}

const person = {
    name: 'victor',
    age: 20,
    sayHello: hello,
    sayHelliWindow: hello.bind(this),
    logInfo: function (job, phone) {
        console.group(`${this.name} info:`)
        console.log(`Name is ${this.name}`)
        console.log(`Age is ${this.age}`)
        console.log(`Job is ${job}`)
        console.log(`Phone is ${phone}`)

        console.groupEnd()
    }
}

const lena = {
    name: 'Elena',
    age: 23
}

const fnLenaInfoLog = person.logInfo.bind(lena, `Frontend`, '8-999-123-12-23')() //надо писать пустыен скобки после применения bind 
// person.logInfo.call(lena, `Frontend`, '8-999-123-12-23')//call-сразу вызывает функцию
person.logInfo.apply(lena, ['Frontend', '8-999-123-12-23']) //передаем данные в виде массива

///=====Задачи=====

const array = [1, 2, 3, 4, 5]

function multBy(arr, n) {
    return arr.map(function (i) {
        return i * n
    })
}
Array.prototype.mulBy = function (n) {
  return this.map(function (i) {
        return i * n
    }) 
}

console.log(array.mulBy(2))
