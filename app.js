const express = require('express')
const path = require('path')
const app = express()

app.use('/public', express.static(path.join(__dirname, 'static')))
// middleware
app.use(express.json())

// custom middleware
app.use('/hello', (req, res, next) => {
    console.log(req.url, req.method)
    next()
})

// custom middleware function
const Logger = (req, res, next) => {
    console.log(`${new Date().toISOString()} : Url ${req.url} : Method ${req.method} is hit`);
    next()
}

app.use(Logger)

app.use('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'static', 'index.html'))
})

app.listen(3000)