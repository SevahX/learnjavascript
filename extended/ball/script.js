'use strict'

let field = document.querySelector("#field");
centerBall(field);

field.addEventListener()

console.log(field);




function centerBall(field) {
    let ball = field.querySelector("img");

    let fWidth = field.clientWidth;
    let fHeight = field.clientHeight;

    ball.style.left = Math.round(fWidth / 2 - ball.offsetWidth / 2) + 'px';
    ball.style.top = Math.round(fHeight / 2 - ball.offsetHeight / 2) + 'px';
}

function scrollBottom(element){
    return element.scrollHeight - element.scrollTop - element.clientHeight;
}

