const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send("Hello World")
})

app.get('/example', (req, res) => {
    res.send("hitting example route")
})

app.get('/example/:name/:age', (req, res) => {
    console.log(req.params.name)
    console.log(req.params.age)
    console.log(req.query)
    res.send("example with route params " + req.params.name + " " + req.params.age + "<br>Your query paramaters " + req.query.name)
})

app.listen(3000)


// TODO :implement express with body parser