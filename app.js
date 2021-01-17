const fs = require('fs')
const zlib = require('zlib')

const readStream = fs.createReadStream("example.txt", "utf8")
const writeStream = fs.createWriteStream("example1.txt")

// sourceStream | destinationStream
// readStream.pipe(writeStream)

const gZip = zlib.createGzip()
const gZipWriteStream = fs.createWriteStream("example1.txt.gz")
readStream.pipe(gZip).pipe(gZipWriteStream)


setTimeout(() => {
    const gZipReadStream = fs.createReadStream("./example1.txt.gz")
    const gUnzip = zlib.createGunzip()
    gUnzip.on('error', error => console.log(error))
    const gUnzipWriteStream = fs.createWriteStream("uncompressed.txt")
    gZipReadStream.pipe(gUnzip).pipe(gUnzipWriteStream)
}, 2000);