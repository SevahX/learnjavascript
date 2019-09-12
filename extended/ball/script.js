'use strict'

let field = document.querySelector("#field");
let ball = field.querySelector("img");

centerBall(field);
console.log(field);



// document.addEventListener("click", (e) => {
//     let ball = field.querySelector("img");
//
//     let border = 10;
//     let minX = field.getBoundingClientRect().left - border ;
//     let minY = field.getBoundingClientRect().top - border;
//
//     let maxX = field.getBoundingClientRect().left + field.offsetWidth - ball.offsetWidth - border;
//     let maxY = field.getBoundingClientRect().top + field.offsetHeight - ball.offsetHeight- border;
//
//     let clickX = e.clientX < minX ? minX : e.clientX;
//
//     let x = e.clientX - ball.offsetWidth;
//     let y = e.clientY - ball.offsetHeight;
//
//     x = x < minX ? minX : x;
//     y = y < minY ? minX : y;
//
//     x = x > maxX ? maxX : x;
//     y = y > maxY ? maxY : y;
//
//     console.log('Click: ' + e.clientX + ' ' + e.clientY);
//     console.log('Min: ' + minX + ' ' + minY);
//     console.log('Max: ' + maxX + ' ' + maxY);
//     console.log('Pos: ' + x + ' ' + y);
//     console.log('\n----------------------------\n');
//
//     ball.style.left = Math.round(x) + 'px';
//     ball.style.top = Math.round(y) + 'px';
// });

field.addEventListener("click", function(event) {

    // координаты поля относительно окна браузера
    let fieldCoords = this.getBoundingClientRect();

    // мяч имеет абсолютное позиционирование (position:absolute), поле - относительное (position:relative)
    // таким образом, координаты мяча рассчитываются относительно внутреннего, верхнего левого угла поля
    let ballCoords = {
        top: event.clientY - fieldCoords.top - field.clientTop - ball.clientHeight / 2,
        left: event.clientX - fieldCoords.left - field.clientLeft - ball.clientWidth / 2
    };

    // запрещаем пересекать верхнюю границу поля
    if (ballCoords.top < 0) ballCoords.top = 0;

    // запрещаем пересекать левую границу поля
    if (ballCoords.left < 0) ballCoords.left = 0;


    // // запрещаем пересекать правую границу поля
    if (ballCoords.left + ball.clientWidth > field.clientWidth) {
        ballCoords.left = field.clientWidth - ball.clientWidth;
    }

    // запрещаем пересекать нижнюю границу поля
    if (ballCoords.top + ball.clientHeight > field.clientHeight) {
        ballCoords.top = field.clientHeight - ball.clientHeight;
    }

    ball.style.left = ballCoords.left + 'px';
    ball.style.top = ballCoords.top + 'px';
});

function centerBall(field) {
    let fWidth = field.clientWidth;
    let fHeight = field.clientHeight;

    ball.style.left = Math.round(fWidth / 2 - ball.offsetWidth / 2) + 'px';
    ball.style.top = Math.round(fHeight / 2 - ball.offsetHeight / 2) + 'px';
}
