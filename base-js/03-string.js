const age = 20

const output = 'Привет, меня зовут ' + name + ' и мой возраст: ' + age + ' лет'
const output = `Привет, меня зовут ${name} и мой возсраст ${age<10 ? 'a' : 'b'} лет.`
console.log(output)

const output=`
    <div>This is div</div>
    <p>This is p</p>
`
console.log(output)

const name = 'Виктор'
console.log(name.length)
console.log(name.toUpperCase());
console.log(name.toLowerCase());
console.log(name.charAt(2)) //Показать определенный символ
console.log(name.indexOf('тор')) //возвращает первый индекс, по которому данный элемент может быть найден в массиве,если такого нет в массиве вернет -1
console.log(name.startsWith('Вик'))
console.log(name.toLowerCase().startsWith('вик'))
console.log(name.endsWith('ар'))
console.log(name.repeat(3))
const string = '         password           '
console.log(string.trim()) //очистить строку от пробелов
console.log(string.trimLeft()) //очистить строку от пробелов
console.log(string.trimRight()) //очистить строку от пробелов

function logPerson(s, name, age) {
    if(age<0){
        age='Еще не родился'
    }

    return `${s[0]}${name}${s[1]}${age}${s[2]}`
}
const personName = 'Виктор'
const personName2 = 'Максим'
const personAge = 20
const personAge2 = -10
const output = logPerson `Имя: ${personName}, Возраст: ${personAge}!`
const output2 = logPerson `Имя: ${personName2}, Возраст: ${personAge2}!`
console.log(output);
console.log(output2);

//////////////////// Задачи на строки

// Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом

const ucFirst = str => {
    return str[0].toUpperCase() + str.slice(1)
}

console.log(ucFirst('привет'))

//////////////////////
////Напишите функцию checkSpam(str), возвращающую true, если str содержит 'viagra' или 'XXX', а иначе false.
// Функция должна быть нечувствительна к регистру:

const checkSpam = str => {
    let lowerStr = str.toLowerCase()
    if (lowerStr.includes('viagra') || lowerStr.includes('xxx')) {
        console.log(true)
    } else {
        console.log(false)
    }
    return lowerStr;
}
checkSpam('buy ViAgRA now')
checkSpam('free xxxxx') 
checkSpam("innocent rabbit") 


//////////////////////
// Создайте функцию truncate(str, maxlength), которая проверяет длину строки str и, если она превосходит maxlength, 
// заменяет конец str на "…", так, чтобы её длина стала равна maxlength.
// Результатом функции должна быть та же строка, если усечение не требуется, либо, если необходимо, усечённая строка.

const truncate = (str, maxlength) => {
    return (str.length> maxlength) ? str.slice(0, maxlength - 1) + '...' : str
}


console.log( truncate('Вот, что мне хотелось бы сказать на эту тему:', 20));



//////////////////////
// Есть стоимость в виде строки "$120". То есть сначала идёт знак валюты, а затем – число.
// Создайте функцию extractCurrencyValue(str), которая будет из такой строки выделять числовое значение и возвращать его.

const extractCurrencyValue = str => {
    return str.slice(1)
}

console.log(extractCurrencyValue('$120'))