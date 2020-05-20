/*=============Задачи

Как найти?…

Таблицу с id="age-table".
Все элементы label внутри этой таблицы (их три).
Первый td в этой таблице (со словом «Age»).
Форму form с именем name="search".
Первый input в этой форме.
Последний input в этой форме.
*/

const ageTable = document.getElementById('age-table')
const form = document.getElementsByName('search')
let inputs = form.querySelectorAll('input')

ageTable.style.background = 'red'
ageTable.getElementsByTagName('label')
ageTable.getElementsByTagName('td')[0]
inputs[inputs.length - 1]
form.getElementsByTagName('input')[0]



