import _ from 'lodash';
import fs from 'fs';

const readReverse = function () {
    fs.readFile('./data.txt', 'utf-8', (err, txt) => {
        if (err) throw err;
        const reverse = _.reverse(txt.split(' ')).join(' ')
        console.log(reverse)
    })
}

const uniq = () => {
    fs.readFile('./data.txt', 'utf-8', (err, txt) => {
        if (err) throw err;
        const uniq = _.uniq(txt.split(' ')).join(' ')
        console.log(uniq)
    })
}

const uniqNumber = () => {
    fs.readFile('./data.txt', 'utf-8', (err, txt) => {
        if (err) throw err;
        const uniq = _.uniq(txt.split(' '))
        console.log(uniq.length)
    })
}

const uniqUpperCase = () => {
    fs.readFile('./data.txt', 'utf-8', (err, txt) => {
        if (err) throw err;
        const uniqUpperCase = _.upperCase(_.uniq(txt.split(' ')).join(' '))
        inBold(uniqUpperCase)
        console.log()
    })
}

const biggerTo5 = () => {
    fs.readFile('./data.txt', 'utf-8', (err, txt) => {
        if (err) throw err;
        const uniq = _.uniq(txt.split(' '))
        const newArr = []
        for(let i = 0; i < uniq.length; i++){
            if(uniq[i].length >= 5){
                newArr.push(uniq[i])
            }
        }
        inBold(newArr.join())
        console.log()
        // console.log(newArr.length)
        // console.log()
    })
}

const vowels = () => {
    fs.readFile('./data.txt', 'utf-8', (err, txt) => {
        if (err) throw err;
        const uniq = _.uniq(txt.split(' '))
        for(const i of uniq){
            let count = 0
            for(const j of i){
                if(j.includes('i')||j.includes('e')||j.includes('o')||j.includes('w')){
                    count ++
                }
            }
            inBold(`word: ${i}, vowelCount: ${count}`)
            inBold()// console.log()
        }
    })
}


const inBold = (resolute) => {
    fs.appendFile('results.txt', resolute, (err) => {
        if (err) throw err;
        // console.log('The file has been saved!');
        });

}