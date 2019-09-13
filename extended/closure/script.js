'use strict';

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

console.log("\n--------------------inBetween-inArray------------------------\n");

let arr = [1, 2, 3, 4, 5, 6, 7];

console.log(arr.filter(inBetween(3, 6)));
console.log(arr.filter(inArray([1, 2, 10])));

console.log("\n--------------------sort------------------------\n");

let users = [
    { name: "John", age: 20, surname: "Johnson" },
    { name: "Pete", age: 18, surname: "Peterson" },
    { name: "Ann", age: 19, surname: "Hathaway" }
];

users.sort(byField('name'));
console.log(users.reduce((final, {name} = curr) => final += "|" + name, ''));

users.sort(byField('age'));
console.log(users.reduce((final, {name} = curr) => final += "|" + name, ''));

function sum(a) {
    return (b) =>{
        return a + b;
    }
}


function makeBuffer() {
    let buf = '';
    return (val = null) => {
        if (val === null){
            return buf;
        }

        buf += val;
    }
}


//Не работает. Не использовать arguments
// function makeBuffer2() {
//     let buf = '';
//     return (val) => {
//         if (arguments.length === 0){
//             return buf;
//         }
//
//         buf += val;
//     }
// }
//
// function makeBuffer3() {
//     let buf = '';
//     return function(val) {
//         if (arguments.length === 0) {
//             return buf;
//         }
//
//         buf += val;
//     };
// }

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

    for(var i = 0; i < 10; i++) {
        var orderNoVar = i;
        let orderNoLet = i;
        let shooter = function() { // функция shooter
            console.log( orderNoVar + "|" + orderNoLet); // должна выводить порядковый номер
        };
        shooters.push(shooter);
    }

    return shooters;
}

function inBetween(left, rigth) {
    return (val) => {
        return val >= left && val <= rigth;
    }
}

function inArray(arr) {
    return (val) => {
        return arr.includes(val);
    }
}

function byField(name) {
    return (a, b) => {
        return a[name] > b[name] ? 1 : -1;
    }
}

