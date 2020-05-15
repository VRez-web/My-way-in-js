const person = {
    name: 'Victor',
    age: 20,
    isProgrammer: true,
    languages: ['ru', 'en', 'de'],
    // 'complex key': 'Complex Value', //key_4
    // ['key_' + (1 + 3)]: 'Computed Key',
    greet() {
        console.log('greet from person')

    },
    info() {
        // console.log('this:', this);

        console.info('Информация про человека по имени:', this.name)
    }

}
// console.log(person.name)
// console.log(person['age'])
// console.log(person['complex key'])

// console.log(person)
// person.greet()

// person.age++
// person.languages.push('by')
// console.log(person)
// // person['key_4'] = undefined
// delete person['key_4']
// console.log(person)
// console.log(person['key_4'])

// const name = person.name
// const age = person.age
// const languages= person.languages

// const {name,age:personAge=10,languages}=person

// for (let key in person) {
//     if (person.hasOwnProperty(key)) {
//         console.log('key:', key)
//         console.log('value', person[key])
//     }

// }
// Object.keys(person).forEach((key)=>{
//     console.log('key:', key)
//     console.log('value', person[key])
// })

//Контекст
// person.info()

const logger = {
    keys() {
        console.log('object keys: ', Object.keys(this))
    },
    keysAndValues() {
        // Object.keys(this).forEach(key =>{
        //     console.log(`${key}: ${this[key]}`)

        // })
        // const self = this
        Object.keys(this).forEach(function (key) {
            console.log(`${key}: ${this[key]}`)

        }.bind(this))
    },
    withParams(top = false, between = false, bottom = false) {
        if (top) {
            console.log('------------ Start--------');

        }
        Object.keys(this).forEach((key, index, array) => {
            console.log(`${key}: ${this[key]}`)
            if (between && index !== array.length - 1) {
                console.log('---------------------');

            }

        })
        if (bottom) {
            console.log('------------ End--------');

        }
    }
}
// const bound = logger.keys.bind(logger)
// bound()

// // logger.keys.call(person)
// logger.keysAndValues.call(person)
logger.withParams.call(person, true, true, true)
logger.withParams.apply(person, [true, true, true])