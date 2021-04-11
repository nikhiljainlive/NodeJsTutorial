const express = require('express')
const router = express.Router()

// custom middleware in routes
router.use((req, res, next) => {
    console.log('middleware being used')
    next()
})

router.get('/', (req, res) => {
    res.send('/ being hit')
})

router.get('/example', (req, res) => {
    res.send('/example being hit')
})

module.exports = router