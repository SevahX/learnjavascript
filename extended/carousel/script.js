'use strict';

// отметить картинки для удобства разработки
// этот код может быть удалён по вашему усмотрению
let carousel = document.querySelector(".carousel");
let i = 1;
for(let li of carousel.querySelectorAll('li')) {
    li.style.position = 'relative';
    li.insertAdjacentHTML('beforeend', `<span style="position:absolute;left:0;top:0">${i}</span>`);
    i++;
}

/* конфигурация */
let width = 130; // ширина картинки
let count = 3; // видимое количество изображений

let list = carousel.querySelector('ul');
let listElem = carousel.querySelectorAll('li');

let position = 0;

carousel.querySelector('.prev').onclick = function() {
    // сдвиг влево
    position += width * count;
    // последнее передвижение влево может быть не на 3, а на 2 или 1 элемент
    position = Math.min(position, 0);
    list.style.marginLeft = position + 'px';
};

carousel.querySelector('.next').onclick = function() {
    // сдвиг вправо
    position -= width * count;
    // последнее передвижение влево может быть не на 3, а на 2 или 1 элемент
    position = Math.max(position, -width * (listElem.length - count));
    list.style.marginLeft = position + 'px';
};