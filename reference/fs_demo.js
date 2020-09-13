const fs = require('fs');
const path = require('path');

// Create Folder

fs.mkdir(path.join(__dirname, '/test'), {}, err => {
    if(err) {
        console.log(err)
    }
    console.log('Folder created....')
})

// Create and Write to file

fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 'Hello World!', err => {
    err ? console.log(err) : console.log('File written to....')

    // Append File
    fs.appendFile(path.join(__dirname, '/test', 'hello.txt'), ' I love Node.js', err => {
        err ? console.log(err) : console.log('File appended....')
        
        // Read File
        fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', (err, data) => {
            err ? console.log(err) : console.log(`The File Says: ${data}`)

            // Rename File
            fs.rename(path.join(__dirname, '/test', 'hello.txt'), path.join(__dirname, '/test', 'whatever.txt'), (err) => {
                err ? console.log(err) : console.log('File Renamed!')
            })
        })
        
    })
})




