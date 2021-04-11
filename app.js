const express = require('express')
const path = require('path')
const app = express()

app.use('/public', express.static(path.join(__dirname, 'static')))
// middleware
app.use(express.json())

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'static', 'index.html'))
})

const peopleRoutes = require('./routes/people')
app.use('/people', peopleRoutes)

app.listen(3000)