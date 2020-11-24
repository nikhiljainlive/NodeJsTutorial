const sum = (num1, num2) => num1 + num2
const PI = 3.14

class MyClass {
    constructor() {
        console.log("I am awaken")
    }
}

module.exports.sum = sum
module.exports.PI = PI
module.exports.MyClass = MyClass
console.log(sum(1, 2))