const fs = require('fs')
const http = require('http')

http.createServer((req, res) => {
    if (req.url == '/htmlContent') {
        const readStream = fs.createReadStream('./static/index.html')
        res.writeHead(200, { 'Content-Type': 'text/html' })
        readStream.pipe(res)
        return
    }

    if (req.url == '/imageContent') {
        const readStream = fs.createReadStream('./static/example.jpg')
        res.writeHead(200, { 'Content-Type': 'image/jpeg' })
        readStream.pipe(res)
        return
    }

    if (req.url == '/jsonContent') {
        const readStream = fs.createReadStream('./static/example.json')
        res.writeHead(200, { 'Content-Type': 'application/json' })
        readStream.pipe(res)
        return
    }

    res.write('Hello World')
    res.end()
}).listen(3000)