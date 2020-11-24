const EventEmitter = require('events')
const { sum } = require('./tutorial')
const Person = require('./Person')

const eventEmitter = new EventEmitter()
eventEmitter.on('tutorial', (num1, num2) => {
    console.log('tutorial event has occurred', sum(num1, num2))
})

eventEmitter.emit('tutorial', 1, 2)

let nick = new Person("Nick")
let neo = new Person("Neo")
neo.on('name', () => console.log("My name is ", neo.name))

nick.on('name', () => {
    console.log("My name is ", nick.name)
})

nick.emit('name')
neo.emit('name')