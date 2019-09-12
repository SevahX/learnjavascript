'use strict'

// 1 - Sum
console.log(sum(10)(2));

// 2 - StringBuffer
let buffer = makeBuffer();
let buffer2 = makeBuffer2();
let buffer3 = makeBuffer3();
// добавить значения к буферу
buffer('Замыкания');
buffer(' Использовать');
buffer(' Нужно!');

buffer2("Другой ");
buffer2("буффер");

buffer3("One ");
buffer3("Two Three");

console.log(buffer());
console.log(buffer2());
console.log(buffer3());

function sum(a) {
    return (b) =>{
        return a + b;
    }
}


function makeBuffer() {
    let buf = '';
    return (val = null) => {
        if (val !== null)
            buf += val;
        return buf;
    }
}

function makeBuffer2() {
    let buf = '';
    return (val) => {
        if (arguments.length === 0)
            return buf;
        buf += val;
    }
}

function makeBuffer3() {
    let buf = '';
    return function(piece) {
        if (arguments.length === 0) {
            return buf;
        }
        buf += piece;
    };
}