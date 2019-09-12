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

// 3 - Buffer With Clear
let bufferToClear = makeBufferWithClear();

bufferToClear("One ");
bufferToClear("Two ");
console.log(bufferToClear());

bufferToClear.clear();
console.log(bufferToClear());

bufferToClear("Three ");
bufferToClear("Four ");

console.log(bufferToClear());

console.log("\n--------------------MakeArmy------------------------\n");
let army = makeArmy();

army[0](); // у 0-го стрелка будет номер 10
army[5](); // и у 5-го стрелка тоже будет номер 10
// ... у всех стрелков будет номер 10, вместо 0, 1, 2, 3...

function sum(a) {
    return (b) =>{
        return a + b;
    }
}


function makeBuffer() {
    let buf = '';
    return (val = null) => {
        if (val === null)
            return buf;

        buf += val;
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
    return function(val) {
        if (arguments.length === 0) {
            return buf;
        }
        buf += val;
    };
}

function makeBufferWithClear() {
    let buf = '';
    function main(val = null) {
        if (val === null)
            return buf;
        buf += val;
    }

    main.clear = () => {
        buf = '';
    };
    return main;
}


function makeArmy() {
    let shooters = [];

    // let i = 0;
    // while (i < 10) {
    //     let orderNo = i;
    //     let shooter = function() { // функция shooter
    //         console.log( orderNo ); // должна выводить порядковый номер
    //     };
    //     shooters.push(shooter);
    //     i++;
    // }

    for(let i = 0; i < 10; i++) {
        let shooter = function() { // функция shooter
            console.log( i ); // должна выводить порядковый номер
        };
        shooters.push(shooter);
    }

    return shooters;
}