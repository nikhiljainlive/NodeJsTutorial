const fs = require('fs')

const fileName = "example.txt"
const readStream = fs.createReadStream(fileName, "utf8")
const writeStream = fs.createWriteStream("example1.txt")

readStream.on("data", chunk => {
    console.log(chunk);
    writeStream.write(chunk)
})