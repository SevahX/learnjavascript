'use strict';

let a = {
    name: 'Misha',
    order: {
        price: 20
    },
};

let b = {
    name: 'Misha',
    order: {
        price: 20,
    }
};


console.log(a === b);


function deepEqual(a, b) {
    if (Object.keys(a).length != Object.keys(b).length) return false;

    for (let key in a) {
        console.log(`a key=${key}:${a[key]} - ${typeof a[key]}`);
        console.log(`b key=${key}:${b[key]} - ${typeof a[key]}`);

        if (typeof a[key] === 'object') {
            if (typeof b[key] !== 'object') return false;
            if (!deepEqual(a[key], b[key])) return false;
        } else if (a[key] !== b[key]) {
            return false;
        }
    }

    return true;
}

console.log(deepEqual(a, b));
document.querySelector('p').textContent = deepEqual(a, b);

