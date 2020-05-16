//====Пример деструктуризации массива

const arr = ['Iliya', 'Ahapov']

записывает firstName=arr[0], surName=arr[1] ----также можно задать значение по умолчанию
const [firstName = 'q', surName = 'd'] = arr

console.log(firstName)
console.log(surName)

//===Вложенная деструктуризация 
let options = {
    size: {
        width: 100,
        height: 200
    },
    items: ['Cake', 'Donut'],
    extra: true
}

let {
    size: {
        width,
        height
    },
    items: [item1, item2],
    title = 'Menu'
} = options;

console.log(width)
console.log(height)
console.log(item1)
console.log(item2)
console.log(title)
//=======как использовать деструктуризацию для того чтобы передать большое количество параметров в функцию =>

let options = {
    title: 'My menu',
    items: ['Item1', 'Item2']
}
// //---передаем объект в функцию и она немедленно извлекает свойства в переменные
const showMenu = ({title = 'Untilted', width = 100, height = 200, items = []}) => {
    alert(`${title} ${width} ${height}`)
    alert(items)
}

showMenu(options)


//================Задачи======================
//----Напишите деструктурирующее присваивание, которое:
//---свойство name присвоит в переменную name.
//---свойство years присвоит в переменную age.
//---свойство isAdmin присвоит в переменную isAdmin (false, если нет такого свойства)
let user = {
    name: 'Jonh',
    years: 30
}

let {
    name,
    years: age,
    isAdmin = false
} = user

alert(name)
alert(age)
alert(isAdmin)

//---Создайте функцию topSalary(salaries), которая возвращает имя самого высокооплачиваемого сотрудника.
// ---Если объект salaries пустой, то нужно вернуть null.
// ---Если несколько высокооплачиваемых сотрудников, можно вернуть любого из них.

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

const topSalary = salaries => {
    let max = 0
    let maxName = null
    for (let [name, salary] of Object.entries(salaries)) {
        if (max < salary) {
            max = salary
            maxName=name
        }
    }
    return maxName
}

console.log(topSalary(salaries))
