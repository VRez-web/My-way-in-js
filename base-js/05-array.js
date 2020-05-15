const cars = ['Mazda', 'ford', 'Bmv', 'Mers']
// const people = [{
//         name: 'Victor',
//         budget: 4200
//     },
//     {
//         name: 'Elena',
//         budget: 3500
//     },
//     {
//         name: 'Victoria',
//         budget: 1700
//     },
// ]
const fib = [1, 1, 2, 3, 5, 8, 13]

// cars.push('Reno')
// cars.unshift('Volga')
// console.log(cars)
// const firstItem=cars.shift()
// console.log(firstItem)

// const lastCar=cars.pop()
// console.log(lastCar);

// console.log(cars.reverse())
// console.log(cars)

// // Задача 1
// const text = 'Привет, мы изучаем JavaScript'
// const reverseText = text.split('').reverse().join('')
// console.log(reverseText)
// cars[index] = 'Porsche'
// console.log(cars)


// const index = people.findIndex(function (person) {

//     return person.budget === 3500

// })
// let findedPerson
// for (const person of people){
//     if(person.budget===3500){
//         findedPerson=person
//     }
// }

// const person = people.find(person => person.budget === 3500)


// console.log(person)


// console.log(cars.includes('Mazda'));

// const upperCaseCars = cars.map(car => {
//     return car.toUpperCase()
// // })
// const pow2 = num => num ** 2
// // const sqrt=num=>Math.sqrt(num)
// // const pow2Fib = fib.map(pow2).map(Math.sqrt)
// // const pow2Fib = fib.map(pow2)
// // const filteresNumbers = pow2Fib.filter(num => num > 20)
// // console.log(filteresNumbers)

// const allBudget = people.filter(person => person.budget > 2000).
// reduce((acc, person) => {

//     acc += person.budget

//     return acc
// }, 0)
// console.log(allBudget);

const people = [{
        name: 'Victor',
        age: 20,
        budget: 10000
    },
    {
        name: 'Elena',
        age: 12,
        budget: 1000
    },
    {
        name: 'Igor',
        age: 24,
        budget: 3500
    },
    {
        name: 'Mihail',
        age: 15,
        budget: 6000
    },
    {
        name: 'Victoria',
        age: 23,
        budget: 25000
    },
    {
        name: 'Danila',
        age: 38,
        budget: 50000
    },
]

////==ForEach
// people.forEach((person,index,pArr) => {
//     console.log(person)//Каждая строка массива
//     console.log(index)//индекс каждый строки arr[inxed]
//     console.log(pArr)//Название переменной которое выводит весь массив

// });

// people.forEach(person => console.log(person))

////==Map

// const newPeople=people.map(person => person.age *3)
// console.log(newPeople)

////==Filter

// const adults = []

// for (let i = 0; i < people.length; i++) {
//     if (people[i].age >= 18){
//         adults.push(people[i])
//     }
// }

// const adults = people.filter(person => person.age >= 18)
// console.log(adults)


////==Reduce
// let amount = 0

// for (let i = 0; i < people.length; i++) {
//     amount+=people[i].budget
// }
// console.log(amount)

// const amount = people.reduce((total, person) =>total + person.budget,0)
// console.log(amount)


////==Find
// const igor = people.find(person => person.name === 'Igor')
// console.log(igor)

////==FindIndex

// const igorIndex = people.findIndex(person => person.name === 'Igor')
// console.log(igorIndex)










///========Задачи================
////// Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».
///// То есть дефисы удаляются, а все слова после них получают заглавную букву.

// const camelize = str => {
//     return newCamelize = str.split('-')
//         .map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1))
//         .join('')
// }

// console.log(camelize('background-color'))
// console.log(camelize("list-style-image"))
// console.log(camelize("-webkit-transition"))

///////Напишите функцию filterRange(arr, a, b), которая принимает массив arr, ищет в нём элементы между a и b и отдаёт массив этих элементов.
// Функция должна возвращать новый массив и не изменять исходный.
// let arr = [5, 3, 8, 1]

// const filterRange = (arr, a, b) => {
//     return arr.filter(item => (a <= item && item <= b))
// }
// let filteredArr = filterRange(arr, 1, 9)
// console.log(filteredArr)


///////////////Напишите функцию filterRangeInPlace(arr, a, b), которая принимает массив arr и удаляет из него все значения кроме тех,
//  которые находятся между a и b. То есть, проверка имеет вид a ≤ arr[i] ≤ b.
// Функция должна изменять принимаемый массив и ничего не возвращать. 