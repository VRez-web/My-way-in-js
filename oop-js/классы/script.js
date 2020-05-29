/*
Абстрактный класс -> класс -> объект

super-обращение к родительскому классу
 */



const a = 'ivan'
const b = '7777777'

const gamer = new User(a, b)
console.log(gamer)
console.log(gamer.userName)
console.log(gamer.validatePassword())

const firstStudent = new Student(a, b, 'testik')

console.log(firstStudent)
console.log(firstStudent.validatePassword())
console.log(firstStudent.getStudentCourses())