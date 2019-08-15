'use strict';


function lessonNumber_1(){
    let num1 = Number(prompt("Input 1 number", 10));
    let num2 = Number(prompt("Input 2 number", 10));
    alert(num1 + num2);
}

function lessonNumber_2_readNumber() {
    let inputNum = NaN;
    while(!isFinite(inputNum) && inputNum !== null){
        let input = prompt("Input number");
        inputNum = input === "" || input === null ? null : Number(input);
    }

    console.log(`Return ${inputNum}`);
    return inputNum;
}

function lessonNumber_3_random(min, max) {
    let res = min + Math.random() * (max - min);
    console.log(res);
    return res;
}

function lessonNumber_3_randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    console.log(Math.floor(rand));
    return Math.floor(rand);
}

