const http = require('http')
const httpServer = http.createServer((req, res) => {
    if (req.url === '/')
        res.write("Welcome Home!")
    else
        res.write('Hello World!')
    res.end()
})

httpServer.listen(3000)