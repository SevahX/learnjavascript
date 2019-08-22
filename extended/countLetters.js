'use strict'
console.log('----------⬇COUNT_LETTERS⬇-----------');


let str = 'aasasdffddwefdssssf';
console.log(`${str} => ${countLetters(str)}`);

console.log(`${null} => ${countLetters(null)}`);
console.log(`${undefined} => ${countLetters(undefined)}`);
console.log(`${''} => ${countLetters('')}`);
console.log(`${'s'} => ${countLetters('s')}`);
console.log(`${'ssddssdd'} => ${countLetters('ssddssdd')}`);
console.log(`${'dda'} => ${countLetters('dda')}`);
console.log(`${'  ssdd ssdd  '} => ${countLetters('  ssdd ssdd  ')}`);

function countLetters(str){
    if (str === null || str === undefined || typeof str !='string'){
        return null;
    }

    let trimStr = str.trim();
    if (trimStr.length === 0) return null;

    let result = '';
    let prevLetter = trimStr[0];
    let count = 0;

    for (let i = 0; i < trimStr.length; i++) {
        let letter = trimStr[i];
        if (letter === ' ') continue;

        if (letter !== prevLetter){
            result +=  count + prevLetter;
            count = 0;
        }

        count++;
        prevLetter = letter;
    }

    result += count + prevLetter;

    return result;
}


console.log('----------⬆COUNT_LETTERS⬆-----------');