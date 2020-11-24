const readline = require('readline')
const { sum } = require('./tutorial')

const readlineInterface = readline.createInterface(input = process.stdin, output = process.stdout)

const firstNum = Math.round(Math.random() * 100 + 1)
const secondNum = Math.round(Math.random() * 100 + 1)
const answer = sum(firstNum, secondNum)

readlineInterface.question(`What is the sum of ${firstNum} + ${secondNum}?\n`, (userInput) => {
    if (answer == userInput.trim()) {
        readlineInterface.close()
    } else {
        readlineInterface.setPrompt("Your answer is incorrect. Try again!\n")
        readlineInterface.prompt()
        readlineInterface.on('line', (newAnswer) => {
            if (answer == newAnswer.trim()) readlineInterface.close()
            else {
                readlineInterface.setPrompt(`Your answer of ${newAnswer} is incorrect. Try again!\n`)
                readlineInterface.prompt()
            }
        })
    }
})

readlineInterface.on("close", () => {
    console.log("Your answer is correct!")
})