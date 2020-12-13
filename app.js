const fs = require('fs')

const fileName = "example.txt"
fs.writeFile(fileName, "This is a file", (error) => {
    if (error)
        console.error(error)
    else
        console.log("Successfully created file")
})

fs.readFile(fileName, "UTF-8", (error, data) => {
    if (error)
        console.error(error);

    if (data)
        console.log(data)
})

fs.mkdir("hello", (error) => {
    if (error) console.error(error);
    else {
        console.log("successfully created the folder")
        fs.writeFile("./hello/a.txt", "This is A file", error => {
            if (error) console.error(error);
        })
        fs.writeFile("./hello/b.txt", "This is B file", error => {
            if (error) console.error(error);
        })
    }
})

fs.readdir("hello", "utf8", (error, files) => {
    if (error) console.error(error);
    else {
        for (let file of files) {
            fs.unlink(`./hello/${file}`, error => {
                if (error) console.log(error)
            })
        }
    }
})

fs.rmdir("hello", (error) => {
    if (error) console.error(error);
})

const newFileName = "example1.txt"

fs.rename(fileName, newFileName, (error) => {
    if (error) console.error(error);
})


fs.appendFile(newFileName, "\nNew Data appended", (error) => {
    if (error) console.error(error);
})

fs.unlink(newFileName, error => {
    if (error) console.error(error);
})