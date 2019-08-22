'use strict';

let a = {
    name: 'Misha',
    order: {
        price: 1
    },
};

let b = {
    name: 'Misha',
    order: {
        price: 1,
    }
};

function deepEqual(a, b) {
    if (Object.keys(a).length !== Object.keys(b).length) return false;

    for (let key in a) {
        if (a[key] !== null && typeof a[key] === 'object') {
            if (typeof b[key] !== 'object') return false;
            if (!deepEqual(a[key], b[key])) return false
        } else {
            if (a[key] !== b[key]) return false;
        }
    }

    return true;
}

/*
- я бы рекомендовал переделать алгоритм   и проверять примитивы->null->обьект -->  количество ключей
 */
function deepEqual(a, b) {
    return true;
}

console.log("DEEP_EQUAL");
console.log(a === b);
console.log(deepEqual(a, b));
console.log(" --------------------- ");
