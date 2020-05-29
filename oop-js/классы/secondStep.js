class User {
    constructor(name) {
        this.name = name
    }
    sayHello() {
        console.log(this.name + ' Hello')
        return this.name
    }
}
const alex = new User('Alex')
console.log(alex)

class Person extends User {
    constructor(name, email) {
        super(name)
        this.email = email
    }
    sayHello2(){
        console.log(this.email)
     
        
    }
}
const li = new Person('ghbdtn', 'dfl,gdlg')
console.log(li)
console.log(li.sayHello())
console.log(li.sayHello2())
