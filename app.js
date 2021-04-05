const express = require('express')
const path = require('path')
const app = express()
const bodyParser = require('body-parser')
const joi = require('joi')

// app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/public', express.static(path.join(__dirname, 'static')))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'static', 'index.html'))
})

app.post('/', (req, res) => {
    console.log(req.body)

    const schema = joi.object().keys({
        email: joi.string().trim().email().required(),
        pwd: joi.string().min(5).max(10).required()
    })

    const { error, value } = schema.validate(req.body)
    if (error) {
        console.log(error)
        res.send('an error has occured')
        return
    }

    console.log(value)
    res.send('successfully posted the data')
})

app.listen(3000)