const EventEmitter = require('events')
const { sum } = require('./tutorial')

const eventEmitter = new EventEmitter()
eventEmitter.on('tutorial', (num1, num2) => {
    console.log('tutorial event has occurred', sum(num1, num2))
})

eventEmitter.emit('tutorial', 1, 2)