const express = require('express')
const path = require('path')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))

app.use('/public', express.static(path.join(__dirname, 'static')))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'static', 'index.html'))
})

app.post('/', (req, res) => {
    console.log(req.body)
    console.log(req.body.email)
    console.log(req.body.pwd)

    // TODO :: do something with email and password
    res.send('successfully posted data')
})

app.listen(3000)