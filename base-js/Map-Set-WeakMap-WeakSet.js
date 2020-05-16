// ====== Map

const obj = {
    name: 'Victor',
    age: 26,
    job: 'Fullstack'
}

const entries = [
    ['name', 'Victor'],
    ['age', 26],
    ['job', 'Fullstack']
]

console.log(Object.entries(obj))//Метод Object.entries() позволят сделать из объекта-массив

console.log(Object.fromEntries(entries))//Делает из массива объект


const map = new Map(entries)

map
    .set('newField', 42)
    .set(obj, 'Value of object')
    .set(NaN, 'NaN ??')

console.log(map.get(NaN))

map.delete('job')
console.log(map.has('job'))
console.log(map.size)
map.clear()
console.log(map.size)

//=============
for (let [key, value] of map.entries()) {
    console.log(key, value)
}

for (let val of map.values()) {
    console.log(val)
}
for (let key of map.keys()) {
    console.log(key)
}
map.forEach((val,key,m)=>{
    console.log(val, key)

})

//===============
const array = Array.from(map)
const mapObj = Object.fromEntries(map.entries())
console.log(mapObj)


//========================
const users = [{
        name: 'Elena'
    },
    {
        name: 'Alex'
    },
    {
        name: 'Irina'
    }
]

const visits = new Map()
visits
    .set(users[0], new Date())
    .set(users[1], new Date(new Date().getTime() + 1000 * 60))
    .set(users[2], new Date(new Date().getTime() + 5000 * 60))

function lastVisit(user) {
    return visits.get(user)
}

console.log(lastVisit(users[2]))



////////////====Set

const set = new Set([1, 2, 3, 3, 3, 4, 5, 5, 6])

set.add(10).add(20).add(30).add(20)

console.log(set)
console.log(set.has(40))
console.log(set.size)
console.log(set.delete(1))
console.log(set.size)
console.log(set.clear())
console.log(set.size)

console.log(set.entries())

for (let key of set) {
    console.log(key)
}
//========
function uniqValues(array) {
return Array.from(new Set(array))

}
console.log(uniqValues([1,1,2,2,4,4,4,4,4,5,6,6,6,6]))

////////////====WeakMap

let obj = {
    name: 'weakmap'
}

const arr=[obj]
obj = null
console.log(arr[0])

const map = new WeakMap([
    [obj, 'obj data']
])
// get set delete has
obj = null
///============

const cache = new WeakMap()

function cacheUser(user) {
    if (!cache.has(user)) {
        cache.set(user, Date.now())
    }
    return cache.get(user)
}
let lena = {
    name: 'Elena'
}
let alex = {
    name: 'Alex'
}

cacheUser(lena)
cacheUser(alex)

lena = null
console.log(cache.has(lena))
console.log(cache.has(alex))


////////////====WeakSet
const users = [{
        name: 'Elena'
    },
    {
        name: 'Alex'
    },
    {
        name: 'Irina'
    }
]

const visits = new WeakSet()
visits.add(users[0]).add(users[1])
users.splice(1, 1)


console.log(visits.has(users[0]))
console.log(visits.has(users[1]))

//===========Задачи=============

//.. Создайте функцию unique(arr), которая вернёт массив уникальных, не повторяющихся значений массива arr.
let values = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
]

const unique = arr => Array.from( new Set(arr))
console.log(unique(values))

//..Есть объект salaries с произвольным количеством свойств, содержащих заработные платы.
// Напишите функцию sumSalaries(salaries), которая возвращает сумму всех зарплат с помощью метода Object.values и цикла for..of.
// Если объект salaries пуст, то результат должен быть 0.


let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
}


const sumSalaries = (salaries) => {
    let sumSalar=0

    for (let value of Object.values(salaries) ) {
         sumSalar += value
    }

    return sumSalar
}


/////Альтернативный вариант через Reduce

const sumSalaries = (salaries) => Object.values(salaries).reduce((a, b) => a + b, 0 )
console.log(sumSalaries(salaries))

//....Напишите функцию count(obj), которая возвращает количество свойств объекта:

let user = {
    name: 'John',
    age: 30
};

const count = obj => Object.keys(obj).length

console.log(count(user))