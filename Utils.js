import fs from 'fs';

const read = function () {
    fs.readFile('./data.txt', 'utf-8', (err, txt) => {
        if (err) throw err;
        console.log(txt)
    })
}

const wordCount = function () {
    fs.readFile('./data.txt', 'utf-8', (err, txt) => {
        if (err) throw err;
        const words = txt.split(' ')
        console.log(`The number of words in the file is: ${words.length}`)
    })
}