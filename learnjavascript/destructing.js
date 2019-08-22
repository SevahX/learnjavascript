'use strict'
console.log('----------⬇DESTRUCTING⬇-----------');
let user = {
    name: "John",
    years: 30
};

let {name, years: age, isAdmin = false} = user;
console.log(`name: ${name}, age: ${age}, isAdmin: ${isAdmin}`);

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

function topSalary(salaries){
    let name = null;
    let maxSalary = 0;
    for(let [n, salary] of Object.entries(salaries)){
        if (salary > maxSalary){
            maxSalary = salary;
            name = n;
        }
    }
    return name;
}

console.log(topSalary({}));

console.log('----------⬆DESTRUCTING⬆-----------');



//QuerySelector, QuerySelectorAll
// #id
// #class
// ...Спреад оператор