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

function object_lesson_1() {
    let user = {};
    user.name = 'John';
    user.surname = 'Smith';
    user.name = 'Pete';
    delete user.name;
}

function object_lesson_2_isEmpty(obj) {
    return Object.keys(obj).length === 0;
}

function object_lesson_3_sum(){
    let salaries = {
        John: 100,
        Ann: 160,
        Pete: 130
    };

    let sum = 0;
    for(let key in salaries){
        sum += salaries[key];
    }
    return sum;
}

function object_lesson_3_multiplyNumeric(obj){
    for(let key in obj){
        if (typeof obj[key] === 'number'){
            obj[key] = obj[key]*2;
        }
    }
}

console.log('ObjectLesson.IsEmpty');
console.log(object_lesson_2_isEmpty({}));
console.log(object_lesson_2_isEmpty({a:1}));
console.log('--------------------');
console.log('ObjectLesson.Sum');
console.log(object_lesson_3_sum());
console.log('--------------------');
console.log('ObjectLesson.Multiply');
object_lesson_3_multiplyNumeric({
    width: 201,
    height: 300,
    title: "My menu"
});
console.log(menu);
console.log('--------------------');


