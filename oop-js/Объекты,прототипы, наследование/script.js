let a = {
    text: 'Hello',
    color: 'red',
    bold: true,
    show: function () {
        console.log(this.color)

    }
}
let b = {
    fontSize: '24px',
    __proto__: a
}
console.log(a)
console.log(b)
b.text = 'one'
console.log(b.text)
console.log(a.text)
b.color = 'green'
b.show()

let c = {
    fontFamily: 'Verdana',
    __proto__: b
}
console.log(c)
console.log(c.bold)
console.log(c.hasOwnProperty('bold'))


